import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { UsdInrComponent } from './features/forex/usd-inr/usd-inr.component';
import { AboutUsComponent } from './core/pages/about-us/about-us.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
    
  },

  {
    path: 'dashboard',
    component: HomePageComponent,
    canActivate: [],
    children:[
      {
        path: '',
         redirectTo:'about-us',
         pathMatch:'full'
      },
   
      {
        path: 'usdinr',
        component: UsdInrComponent,   
      },
      {
        path:'about-us',
        component:AboutUsComponent
      }
    ],

  },

   
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { 



}
