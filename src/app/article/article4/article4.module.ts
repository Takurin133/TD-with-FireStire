import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article4PageRoutingModule } from './article4-routing.module';

import { Article4Page } from './article4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article4PageRoutingModule
  ],
  declarations: [Article4Page]
})
export class Article4PageModule {}
