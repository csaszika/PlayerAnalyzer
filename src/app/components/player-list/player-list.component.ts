import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers';
import {Player, PlayerId} from "../../types/player";
import {Message} from "primeng/primeng";

@Component({
  selector: 'app-player-list',
  template: `
    <p-datatable [value]="players" [rows]="10" [paginator]="true"
                 selectionMode="single" [(selection)]="selectedPlayer">
      <p-header>List of Players</p-header>
      <p-column field="name" header="Name"></p-column>
    </p-datatable>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {

  @Input() players: Player[];

  @Output() playerSelected = new EventEmitter<PlayerId>();

  message: Message[];

  selectedPlayer: Player;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  onRowSelect(playerRow) {
    this.message = [];
    this.message.push({severity: 'info',
      summary: 'Player Selected',
      detail: playerRow.data.name + ' - ' + playerRow.data.speed});
    this.selectPlayer(playerRow.data.id);
  }

  selectPlayer(playerId: PlayerId) {
    this.playerSelected.emit(playerId);
  }

}
