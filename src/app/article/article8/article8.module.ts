import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article8PageRoutingModule } from './article8-routing.module';

import { Article8Page } from './article8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article8PageRoutingModule
  ],
  declarations: [Article8Page]
})
export class Article8PageModule {}
