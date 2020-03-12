import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article3PageRoutingModule } from './article3-routing.module';

import { Article3Page } from './article3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article3PageRoutingModule
  ],
  declarations: [Article3Page]
})
export class Article3PageModule {}
