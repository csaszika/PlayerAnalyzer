import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {reducers, initialState} from './reducers';
import {RingListComponent} from "./components/ring-list/ring-list.component";
import {PlayerListComponent} from "./components/player-list/player-list.component";
import { PlayerPageContainerComponent } from './containers/player-page-container.component';
import {DataTableModule} from "primeng/primeng";
import {EffectsModule} from "@ngrx/effects";
import {PlayerEffects} from "./effects/player-effects";
import {PageNotFoundComponent} from "./containers/page-not-found";

@NgModule({
  declarations: [
    AppComponent,
    DataTableModule,
    PlayerListComponent,
    RingListComponent,
    PlayerPageContainerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // AppRoutingModule,
    StoreModule.provideStore(reducers, initialState),
    EffectsModule.runAfterBootstrap(PlayerEffects)
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
