import { Routes } from '@angular/router';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistPage } from '../pages/regist/regist';

export const routes: Routes = [
  { path: '',       component: TabsPage },
  { path: 'login',  component: LoginPage },
  { path: 'regist', component: RegistPage }
];
