import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'article/article1',
    loadChildren: () => import('./article/article1/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'article/article2',
    loadChildren: () => import('./article/article2/article2.module').then( m => m.Article2PageModule)
  },
  {
    path: 'article/article3',
    loadChildren: () => import('./article/article3/article3.module').then( m => m.Article3PageModule)
  }, {
    path: 'article/article4',
    loadChildren: () => import('./article/article4/article4.module').then( m => m.Article4PageModule)
  }, {
    path: 'article/article5',
    loadChildren: () => import('./article/article5/article5.module').then( m => m.Article5PageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'article/article0',
    loadChildren: () => import('./article/article0/article0.module').then( m => m.Article0PageModule)
  },
  {
    path: 'article/article6',
    loadChildren: () => import('./article/article6/article6.module').then( m => m.Article6PageModule)
  },
  {
    path: 'article/article7',
    loadChildren: () => import('./article/article7/article7.module').then( m => m.Article7PageModule)
  },
  {
    path: 'article/article8',
    loadChildren: () => import('./article/article8/article8.module').then( m => m.Article8PageModule)
  },
  {
    path: 'article/article9',
    loadChildren: () => import('./article/article9/article9.module').then( m => m.Article9PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
