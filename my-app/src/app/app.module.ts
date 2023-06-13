import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home-page/home-page.component';

//Material Imports
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { UsdInrComponent } from './features/forex/usd-inr/usd-inr.component';
import { AboutUsComponent } from './core/pages/about-us/about-us.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    UsdInrComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //Material Imports
    MatExpansionModule,
    MatSidenavModule,
    MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
