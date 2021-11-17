import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessengerModalPage } from './messenger-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MessengerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessengerModalPageRoutingModule {}
