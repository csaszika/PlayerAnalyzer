import {PlayerPageContainerComponent} from "./containers/player-page-container/player-page-container.component";
import {PageNotFoundComponent} from "./containers/page-not-found";
import {RingsPageContainerComponent} from "./containers/rings-page-container/rings-page-container.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
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
    path: 'ring-list',
    component: RingsPageContainerComponent,
    children: []
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }

];
