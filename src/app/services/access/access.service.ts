import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(
    private networkService: NetworkService,
    private platform: Platform,
  ) {
  }

  async canNavigate() {
    if (!this.platform.is('cordova')) {
      return true;
    } else {
      const internetResponse = await this.networkService.checkConnection();
      return internetResponse;
    }
  }
}
