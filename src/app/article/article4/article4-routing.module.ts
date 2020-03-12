import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article4Page } from './article4.page';

const routes: Routes = [
  {
    path: '',
    component: Article4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article4PageRoutingModule {}
