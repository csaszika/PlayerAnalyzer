import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers';
import {Ring} from "../../types/ring";
import {Observable} from "rxjs/Observable";
import {GetRings} from "../../actions/ring/ring";

@Component({
  selector: 'app-rings-page-container',
  templateUrl: './rings-page-container.component.html'
})
export class RingsPageContainerComponent implements OnInit {

  private rings$: Observable<Ring[]>;
  rings: Ring[];

  constructor(private store: Store<fromRoot.State>) {
    this.rings$ = this.store.select(fromRoot.getRingList);

    this.rings$.subscribe(data => {
      this.rings = data as Ring[];
    })
  }

  ngOnInit() {
    this.store.dispatch(new GetRings());
  }

}
