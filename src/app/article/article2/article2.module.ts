import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article2PageRoutingModule } from './article2-routing.module';

import { Article2Page } from './article2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article2PageRoutingModule
  ],
  declarations: [Article2Page]
})
export class Article2PageModule {}
