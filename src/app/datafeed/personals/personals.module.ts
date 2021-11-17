import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalsPageRoutingModule } from './personals-routing.module';

import { PersonalsPage } from './personals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalsPageRoutingModule
  ],
  declarations: [PersonalsPage]
})
export class PersonalsPageModule {}
