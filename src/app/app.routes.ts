import { Routes } from '@angular/router';
import { Connect } from './connect/connect';
import { Login } from './login/login';

export const routes: Routes = [
    { 
        path: 'connect',
        component: Connect
    },
    {
        path: 'login',
        component: Login
    }
];
