import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule, DataTableModule, DialogModule} from "primeng/primeng";
import {UserEffects} from "./effects/user-effects";
import {UserPageContainerComponent} from "./containers/user-page-container/user-page-container.component";
import {initialState, reducer, USER_STATE} from "./reducers/user";
import {RouterModule} from "@angular/router";
import {userRoutes} from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature(USER_STATE, reducer, {initialState}),
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

