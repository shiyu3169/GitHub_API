import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../../services/home.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') homeForm: NgForm;

  username: String;
  repos: Object = '';

  constructor(private homeService: HomeService) { }

  searchRepos() {
    this.username = this.homeForm.value.username;
    this.homeService.searchRepos(this.username)
      .subscribe(
        (data: any) => {
          this.repos = data;
        }
      );
  }
  ngOnInit() {
  }
}
