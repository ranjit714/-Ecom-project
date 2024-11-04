import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellarAuthComponent } from './sellar-auth/sellar-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'seller-auth',component: SellarAuthComponent},
  {path:'seller-home',component: SellerHomeComponent, canActivate: [AuthGuard]},
  {path:'**',component:PageNotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
