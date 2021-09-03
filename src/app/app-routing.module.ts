import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chat-view',
    loadChildren: () => import('./chat-view/chat-view.module').then( m => m.ChatViewPageModule)
  },
  {
    path: 'groupchat-view',
    loadChildren: () => import('./groupchat-view/groupchat-view.module').then( m => m.GroupchatViewPageModule)
  },
  // {
  //   path: 'blocked-users',
  //   loadChildren: () => import('./blocked-users/blocked-users.module').then( m => m.BlockedUsersPageModule)
  // },
  // {
  //   path: 'image-viewer',
  //   loadChildren: () => import('./component/image-viewer/image-viewer.module').then( m => m.ImageViewerPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'tab1',
  //   loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  // },
  // {
  //   path: 'tab2',
  //   loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
