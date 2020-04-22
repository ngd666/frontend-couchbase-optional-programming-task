import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MainContentComponent} from './main-content/main-content.component';
import {HomePageComponent} from './home-page/home-page.component';
import { BreweryListPageComponent } from './brewery-list-page/brewery-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    MainContentComponent,
    HomePageComponent,
    BreweryListPageComponent
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
