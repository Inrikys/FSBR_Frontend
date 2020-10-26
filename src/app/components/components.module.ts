import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './headers/page-header/page-header.component';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from './headers/modal-header/modal-header.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    ModalHeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    PageHeaderComponent,
    ModalHeaderComponent,
  ]
})
export class ComponentsModule { }
