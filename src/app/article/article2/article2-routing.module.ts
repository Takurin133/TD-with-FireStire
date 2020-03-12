import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article2Page } from './article2.page';

const routes: Routes = [
  {
    path: '',
    component: Article2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article2PageRoutingModule {}
