import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers, initialState} from './reducers';
import { PlayerPageContainerComponent } from './containers/player-page-container/player-page-container.component';
import {
  ButtonModule, ChartModule, DataGridModule, DataTableModule, GrowlModule, MessagesModule,
  ScheduleModule
} from "primeng/primeng";
import {EffectsModule} from "@ngrx/effects";
import {PlayerEffects} from "./effects/player-effects";
import {PageNotFoundComponent} from "./containers/page-not-found";
import {AppRoutingModule} from "./app-routing.module";
import {RingsPageContainerComponent} from "./containers/rings-page-container/rings-page-container.component";
import {RingEffects} from "./effects/ring-effects";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
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
    ScheduleModule,
    ButtonModule,
    DataGridModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    StoreModule.forRoot(reducers, {initialState}),
    EffectsModule.forRoot([PlayerEffects, RingEffects]),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
