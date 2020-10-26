import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './headers/page-header/page-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MenuComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    MenuComponent,
    PageHeaderComponent,
  ]
})
export class ComponentsModule { }
