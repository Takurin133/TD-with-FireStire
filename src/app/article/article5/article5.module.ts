import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article5PageRoutingModule } from './article5-routing.module';

import { Article5Page } from './article5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article5PageRoutingModule
  ],
  declarations: [Article5Page]
})
export class Article5PageModule {}
