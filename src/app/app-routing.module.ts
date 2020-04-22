import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {BreweryListPageComponent} from './brewery-list-page/brewery-list-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'breweries', component: BreweryListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
