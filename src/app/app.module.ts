import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PlayerPageContainerComponent} from './containers/player-page-container/player-page-container.component';
import {RingsPageContainerComponent} from "./containers/rings-page-container/rings-page-container.component";
import {PageNotFoundComponent} from "./containers/page-not-found";
import {
  ButtonModule, ChartModule, DataGridModule, DataTableModule, DialogModule, GrowlModule, MessagesModule,
  ScheduleModule
} from "primeng/primeng";
import {EffectsModule} from "@ngrx/effects";
import {PlayerEffects} from "./effects/player-effects";
import {RingEffects} from "./effects/ring-effects";
import {routes} from "./app-routing.module";
import {environment} from "../environments/environment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserModule} from "./user/user-module.module";
import * as player from "./reducers/player";
import * as ring from "./reducers/ring";
import {RouterModule} from "@angular/router";

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
    DataTableModule,
    ChartModule,
    MessagesModule,
    GrowlModule,
    ScheduleModule,
    ButtonModule,
    DataGridModule,
    DialogModule,
    BrowserAnimationsModule,
    UserModule,
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreModule.forRoot({player: player.reducer, ring: ring.reducer}),
    EffectsModule.forRoot([PlayerEffects, RingEffects]),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
