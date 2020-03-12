import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article9Page } from './article9.page';

const routes: Routes = [
  {
    path: '',
    component: Article9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article9PageRoutingModule {}
