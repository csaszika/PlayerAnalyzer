import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import {Http} from "@angular/http";
import {toRoman} from 'roman-numerals';
import {GET_USERS, UsersLoaded} from "../actions/user";
import {User} from "../types/user";

@Injectable()
export class UserEffects {

  @Effect()
  loadUsersEffect$ = this.actions$
    .ofType(GET_USERS)
    .switchMap(() =>
      this.http.get('assets/json/users.json')
        .map(res => res.json())
        .map(data => {
          return new UsersLoaded(data as User[]);
        }));

  constructor(private actions$: Actions, private http: Http) {
  }
}

