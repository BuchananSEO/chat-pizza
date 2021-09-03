import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupchatViewPageRoutingModule } from './groupchat-view-routing.module';

import { GroupchatViewPage } from './groupchat-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupchatViewPageRoutingModule
  ],
  declarations: [GroupchatViewPage]
})
export class GroupchatViewPageModule {}
