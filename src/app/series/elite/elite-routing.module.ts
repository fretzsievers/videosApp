import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElitePage } from './elite.page';

const routes: Routes = [
  {
    path: '',
    component: ElitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElitePageRoutingModule {}
