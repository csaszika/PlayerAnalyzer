import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Player, PlayerId} from "../types/player";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-player-page-container',
  template: `
    <app-player-list [players]="players$ | async"
                     (playerSelected)="playerSelected($event)">
    </app-player-list>`,
})
export class PlayerPageContainerComponent implements OnInit {

  players$: Observable<Player[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.players$ = this.store.select(fromRoot.getPlayerList);
  }

  ngOnInit() {
  }

  playerSelected(playerId: PlayerId) {
    console.log(playerId);
  }

}
