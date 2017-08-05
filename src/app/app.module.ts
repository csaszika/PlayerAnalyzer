import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducers, initialState} from './reducers';
//import {EffectsModule} from '@ngrx/effects';
import { PlayerListComponent } from './player-list/player-list.component';
import { RingListComponent } from './ring-list/ring-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    RingListComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducers, initialState),
    //EffectsModule.runAfterBootstrap(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
