import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessengerModalPageRoutingModule } from './messenger-modal-routing.module';

import { MessengerModalPage } from './messenger-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessengerModalPageRoutingModule
  ],
  declarations: [MessengerModalPage]
})
export class MessengerModalPageModule {}
