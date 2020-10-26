import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private network: Network,
    private toast: ToastController,
  ) {
  }

  async checkConnection() {
    const type = this.network.type;

    if (type === 'none' || type === 'unknow') {
      const toast = await this.toast.create({
        message: 'Sem conexão com a internet!',
        duration: 3000,
        position: 'top'
      });

      toast.present();
      return false;
    }

    return true;
  }
}
