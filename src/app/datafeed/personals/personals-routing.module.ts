import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalsPage } from './personals.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalsPageRoutingModule {}
