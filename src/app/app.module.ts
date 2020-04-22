import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {HomePageComponent} from './home-page/home-page.component';
import { BreweryListPageComponent } from './brewery-list-page/brewery-list-page.component';
import { BeerListPageComponent } from './beer-list-page/beer-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    HomePageComponent,
    BreweryListPageComponent,
    BeerListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
