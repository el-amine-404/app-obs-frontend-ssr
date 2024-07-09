import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'users',title:"Users", component: UsersComponent },
];
