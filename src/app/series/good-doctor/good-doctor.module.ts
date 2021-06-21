import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodDoctorPageRoutingModule } from './good-doctor-routing.module';

import { GoodDoctorPage } from './good-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodDoctorPageRoutingModule
  ],
  declarations: [GoodDoctorPage]
})
export class GoodDoctorPageModule {}
