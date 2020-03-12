import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article6Page } from './article6.page';

const routes: Routes = [
  {
    path: '',
    component: Article6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article6PageRoutingModule {}
