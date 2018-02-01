import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  searchRepos(username: String) {
    const url
      = 'https://api.github.com/users/' + username + '/repos';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
