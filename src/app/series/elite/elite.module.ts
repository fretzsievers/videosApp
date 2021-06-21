import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElitePageRoutingModule } from './elite-routing.module';

import { ElitePage } from './elite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElitePageRoutingModule
  ],
  declarations: [ElitePage]
})
export class ElitePageModule {}
