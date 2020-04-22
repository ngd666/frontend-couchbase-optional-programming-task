import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {BreweryListPageComponent} from './brewery-list-page/brewery-list-page.component';
import {BeerListPageComponent} from './beer-list-page/beer-list-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'breweries', component: BreweryListPageComponent},
  {path: 'beers', component: BeerListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
