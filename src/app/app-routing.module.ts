import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loki',
    loadChildren: () => import('./series/loki/loki.module').then( m => m.LokiPageModule)
  },
  {
    path: 'elite',
    loadChildren: () => import('./series/elite/elite.module').then( m => m.ElitePageModule)
  },
  {
    path: 'lucifer',
    loadChildren: () => import('./series/lucifer/lucifer.module').then( m => m.LuciferPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'good-doctor',
    loadChildren: () => import('./series/good-doctor/good-doctor.module').then( m => m.GoodDoctorPageModule)
  },
  {
    path: 'dados-series',
    loadChildren: () => import('./dados-series/dados-series.module').then( m => m.DadosSeriesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
