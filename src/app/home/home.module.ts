import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {ModalPage} from '../modal/modal.page'
import { ModalPageModule } from '../modal/modal.module';

import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  
  imports: [
    MatExpansionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ModalPage],
  entryComponents:[ModalPage]
})
export class HomePageModule {}
