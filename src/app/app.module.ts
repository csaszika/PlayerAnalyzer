import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers, initialState} from './reducers';
import {PlayerPageContainerComponent} from './containers/player-page-container/player-page-container.component';
import {RingsPageContainerComponent} from "./containers/rings-page-container/rings-page-container.component";
import {PageNotFoundComponent} from "./containers/page-not-found";
import {
  ButtonModule, ChartModule, DataGridModule, DataTableModule, DialogModule, GrowlModule, MessagesModule,
  ScheduleModule
} from "primeng/primeng";
import {Actions, EffectsModule} from "@ngrx/effects";
import {PlayerEffects} from "./effects/player-effects";
import {RingEffects} from "./effects/ring-effects";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import { UserPageContainerComponent } from './containers/user-page-container/user-page-container.component';
import {UserEffects} from "./effects/user-effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserEditComponent } from './components/user-edit/user-edit.component';
import {ChildEffects} from "./effects/child-effects";
import {ChildComponent} from "./components/child/child.component";

@NgModule({
  declarations: [
    AppComponent,
    PlayerPageContainerComponent,
    RingsPageContainerComponent,
    UserPageContainerComponent,
    PageNotFoundComponent,
    UserPageContainerComponent,
    UserEditComponent,
    ChildComponent
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
    DialogModule,
    BrowserAnimationsModule,
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    StoreModule.forRoot(reducers, {initialState}),
    EffectsModule.forRoot([PlayerEffects, RingEffects, UserEffects, ChildEffects]),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
