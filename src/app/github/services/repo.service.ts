import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoService {
  constructor(private _http: Http) {
  }

  getReposForUser(user: string): Observable<any> {
    return this._http
      .get(`https://api.github.com/users/${user}/repos`)
      .map((res: any) => {
        return res.json();
      }).share();
  }

}
