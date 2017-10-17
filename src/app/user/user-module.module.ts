import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {initialState, reducers} from "./reducers/index";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule, DataTableModule, DialogModule} from "primeng/primeng";
import {RouterModule} from "@angular/router";
import {UserEffects} from "./effects/user-effects";
import {UserPageContainerComponent} from "./containers/user-page-container/user-page-container.component";
import * as user from './reducers/user'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
    UserPageContainerComponent,
    UserEditComponent
  ],
  entryComponents: [
    UserPageContainerComponent,
    UserEditComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}

