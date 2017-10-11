import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {GET_CHILDREN} from "../actions/child/child-action-types";
import {Child} from "../types/child";
import {ChildrenLoaded, GetChildren} from "../actions/child/child";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/of";

@Injectable()
export class ChildEffects {

  @Effect({dispatch: false})
  loadChildrenEffect$ = this.actions$
    .ofType(GET_CHILDREN)
    .map((action: GetChildren) => action.payload)
    .switchMap(payload => this.http.get('assets/json/child.json')
      .map(response => new ChildrenLoaded(response.json() as Child[]))
      .catch(() => Observable.of({type: 'bad'}))
    );

  constructor(private actions$: Actions, private http: Http) {
  }
}

