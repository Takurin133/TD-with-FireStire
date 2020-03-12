import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article5Page } from './article5.page';

const routes: Routes = [
  {
    path: '',
    component: Article5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article5PageRoutingModule {}
