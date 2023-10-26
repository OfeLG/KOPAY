import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingStrategyService } from './preloading-strategy.service';


const APP_ROUTES: Routes = [
  
  // Modules
  { path: 'mainPages', data: { preload: true, loadAfterSeconds: 1 }, loadChildren: () => import('./features/main-pages/main-pages.module').then(mod => mod.MainPagesModule), canActivate: [] },
  { path: 'workerUser', data: { preload: true, loadAfterSeconds: 1 }, loadChildren: () => import('./features/worker-user/worker-user.module').then(mod => mod.WorkerUserModule), canActivate: [] },
  
  // { path: '', redirectTo: 'fem', pathMatch: 'full'},
  { path: '**', redirectTo: 'mainPages', pathMatch: 'full' },
];


export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadingStrategyService });