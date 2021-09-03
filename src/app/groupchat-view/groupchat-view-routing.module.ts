import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupchatViewPage } from './groupchat-view.page';

const routes: Routes = [
  {
    path: '',
    component: GroupchatViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupchatViewPageRoutingModule {}
