import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article9PageRoutingModule } from './article9-routing.module';

import { Article9Page } from './article9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article9PageRoutingModule
  ],
  declarations: [Article9Page]
})
export class Article9PageModule {}
