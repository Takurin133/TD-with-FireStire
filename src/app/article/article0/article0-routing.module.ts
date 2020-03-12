import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article0Page } from './article0.page';

const routes: Routes = [
  {
    path: '',
    component: Article0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article0PageRoutingModule {}
