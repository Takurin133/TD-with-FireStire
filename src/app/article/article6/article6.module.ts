import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article6PageRoutingModule } from './article6-routing.module';

import { Article6Page } from './article6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article6PageRoutingModule
  ],
  declarations: [Article6Page]
})
export class Article6PageModule {}
