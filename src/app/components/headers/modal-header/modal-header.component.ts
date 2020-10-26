import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {

  public headerTitle = 'FSBR';
  constructor(
      private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  @Input() set title(val: string){
    this.headerTitle = (val !== undefined && val !== null) ? val : null;
  }
  async closeModal() {
    await this.modalController.dismiss().then(() => {

    }). catch(error => {
      console.log(error);
    });
  }

}
