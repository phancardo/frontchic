import { Routes } from '@angular/router';
import path from 'path';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  // {
  //   path:'',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path:'products',
  //       component:ProductComponent
  //     }
  //   ]
  // }
];
