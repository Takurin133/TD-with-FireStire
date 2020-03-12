import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article7Page } from './article7.page';

const routes: Routes = [
  {
    path: '',
    component: Article7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article7PageRoutingModule {}
