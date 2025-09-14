import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'home',
    loadChildren: () => import('./pages/home/home').then(m => m.Home)
},
{
    path: '/testing',
    loadChildren: () => import('./testingpage/testingpage').then(m => m.Testingpage)
}];
