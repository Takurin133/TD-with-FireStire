import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article3Page } from './article3.page';

const routes: Routes = [
  {
    path: '',
    component: Article3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article3PageRoutingModule {}
