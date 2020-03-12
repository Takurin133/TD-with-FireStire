import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article7PageRoutingModule } from './article7-routing.module';

import { Article7Page } from './article7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article7PageRoutingModule
  ],
  declarations: [Article7Page]
})
export class Article7PageModule {}
