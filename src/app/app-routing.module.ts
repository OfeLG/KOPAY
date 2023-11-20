import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingStrategyService } from './preloading-strategy.service';


const APP_ROUTES: Routes = [
  
  // Modules
  { path: 'mainPages', data: { preload: true, loadAfterSeconds: 1 }, loadChildren: () => import('./features/main-pages/main-pages.module').then(mod => mod.MainPagesModule), canActivate: [] },
  { path: 'packageRegistration', data: { preload: true, loadAfterSeconds: 1 }, loadChildren: () => import('./features/package-registration/package-registration.module').then(mod => mod.PackageRegistration), canActivate: [] },
  
  // { path: '', redirectTo: 'fem', pathMatch: 'full'},
  { path: '**', redirectTo: 'mainPages', pathMatch: 'full' },
];


export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadingStrategyService });