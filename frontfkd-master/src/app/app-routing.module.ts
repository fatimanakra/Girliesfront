import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './autho-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { EmploiComponent } from './auth-components/emploi/emploi.component';
import { StageComponent } from './auth-components/stage/stage.component';
import { DemandeComponent } from './auth-components/demande/demande.component';
import { AddCategoryComponent } from './modules/customer/customer-components/add-category/add-category.component';
import { HomeComponent } from './auth-components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path:'emploi',component:EmploiComponent},
  {path:'stage',component:StageComponent},
  {path:'demande',component:DemandeComponent},
  {path:'home',component:HomeComponent},

  {path:':categoryId/demande',component:DemandeComponent},
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'scrape', component: AddCategoryComponent },

  {path: "admin",loadChildren: ()=> import ("./modules/admin/admin.module").then(m=>m.AdminModule)},
  {path: "customer",loadChildren: ()=> import ("./modules/customer/customer.module").then(m=>m.CustomerModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
