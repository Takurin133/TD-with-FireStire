import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article8Page } from './article8.page';

const routes: Routes = [
  {
    path: '',
    component: Article8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article8PageRoutingModule {}
