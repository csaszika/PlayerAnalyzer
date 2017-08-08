import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {reducers, initialState} from './reducers';
import {RingListComponent} from "./components/ring-list/ring-list.component";
import { PlayerPageContainerComponent } from './containers/player-page-container/player-page-container.component';
import {ChartModule, DataTableModule, GrowlModule, MessagesModule} from "primeng/primeng";
import {EffectsModule} from "@ngrx/effects";
import {PlayerEffects} from "./effects/player-effects";
import {PageNotFoundComponent} from "./containers/page-not-found";
import {AppRoutingModule} from "./app-routing.module";
import {RingsPageContainerComponent} from "./containers/rings-page-container";

@NgModule({
  declarations: [
    AppComponent,
    RingListComponent,
    PlayerPageContainerComponent,
    RingsPageContainerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    ChartModule,
    MessagesModule,
    GrowlModule,
    StoreModule.provideStore(reducers, initialState),
    EffectsModule.runAfterBootstrap(PlayerEffects)
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
