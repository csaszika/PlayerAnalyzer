import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerPageContainerComponent} from "./containers/player-page-container.component";
import {PageNotFoundComponent} from "./containers/page-not-found";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/player-list',
    pathMatch: 'full'
  },
  {
    path: 'player-list',
    component: PlayerPageContainerComponent,
    children: []
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
