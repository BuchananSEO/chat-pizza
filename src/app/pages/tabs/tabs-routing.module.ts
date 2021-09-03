import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)//'../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)//'../tab2/tab2.module#Tab2PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  },
  { path: 'blocked-users',
    loadChildren: '../../blocked-users/blocked-users.module#BlockedUsersPageModule'
  },
  {
    path: 'redirectToTabs',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
