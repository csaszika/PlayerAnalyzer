import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Player} from '../../types/player';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {GetPlayers} from '../../actions/player';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-player-page-container',
  templateUrl: './player-page-container.component.html'
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
          labelColor: 'red',
          fillColor: 'rgba(224, 108, 112, 1)',
          strokeColor: 'rgba(207,0,0,1)',
          pointColor: 'rgba(200,0,0,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,0.8)',
          backgroundColor: 'rgba(243, 156, 18,0.2)',
          borderColor: 'rgba(243, 156, 18,1.0)',
          pointBackgroundColor: 'rgba(243, 156, 18,1.0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(243, 156, 18,1.0)',
          data: [0,0,0,0,0]
        }]
    };
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
          backgroundColor: 'rgba(243, 156, 18,0.2)',
          borderColor: 'rgba(243, 156, 18,1.0)',
          pointBackgroundColor: 'rgba(243, 156, 18,1.0)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(243, 156, 18,1.0)',
          data: [this.selectedPlayer.speed,
            this.selectedPlayer.agility,
            this.selectedPlayer.power,
            this.selectedPlayer.moral,
            this.selectedPlayer.luck]
        }]
    }
  }
}
