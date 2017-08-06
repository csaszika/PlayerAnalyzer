import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Player, PlayerId} from "../types/player";
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';
import {GetPlayers} from "../actions/player";
import {Message, UIChart} from "primeng/primeng";

@Component({
  selector: 'app-player-page-container',
  template: `
    <p-growl [value]="message"></p-growl>
  <p-dataTable [value]="players$ | async" [rows]="10" [paginator]="true"
               selectionMode="single" [(selection)]="selectedPlayer"
               (onRowSelect)="onRowSelect($event)">
    <p-column field="name" header="Name"></p-column>
    <p-column field="speed" header="Speed"></p-column>
    <p-column field="agility" header="Agility"></p-column>
    <p-column field="power" header="Power"></p-column>
    <p-column field="moral" header="Moral"></p-column>
    <p-column field="moral" header="Luck"></p-column>
  </p-dataTable>
  <br/>
  <p-chart #chart type="radar" width="400" height="400" 
           [data]="data" [options]="options"></p-chart>  
  `
})
export class PlayerPageContainerComponent implements OnInit {

  players$: Observable<Player[]>;

  data: any;
  options: any;

  selectedPlayer: Player;
  message: Message[];

  constructor(private store: Store<fromRoot.State>) {
    this.players$ = this.store.select(fromRoot.getPlayerList);
    this.data = {
      labels: ['Speed', 'Agility', 'Power', 'Moral', 'Luck'],
      datasets: [
        {
          label: 'Player Stats',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [0,0,0,0,0]
        }]
    }
    this.options = {
      responsive: false,
      maintainAspectRatio: false
    };

  }

  ngOnInit() {
    this.store.dispatch(new GetPlayers());
  }

  onRowSelect(playerRow) {
    this.message = [];
    this.message.push({severity: 'info',
      summary: 'Player Selected',
      detail: playerRow.data.name + ' - ' + playerRow.data.speed});
    this.data = {
      labels: ['Speed', 'Agility', 'Power', 'Moral', 'Luck'],
      datasets: [
        {
          label: 'Player Stats',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [this.selectedPlayer.speed,
            this.selectedPlayer.agility,
            this.selectedPlayer.power,
            this.selectedPlayer.moral,
            this.selectedPlayer.luck]
        }]
    }
  }
}
