import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {

  constructor(
    private menuController: MenuController,
  ) { }

  ngOnInit() {}

  openMenu(){
    this.menuController.open();
  }

}
