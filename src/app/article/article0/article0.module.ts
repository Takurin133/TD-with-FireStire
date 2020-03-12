import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article0PageRoutingModule } from './article0-routing.module';

import { Article0Page } from './article0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article0PageRoutingModule
  ],
  declarations: [Article0Page]
})
export class Article0PageModule {}
