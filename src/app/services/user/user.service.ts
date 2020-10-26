import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

// Interfaces
import { User } from '../../interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    // private http: HttpClient,
    private storage: Storage,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.load();
  }


  // STORAGE FUNCTIONS
  load() {
    this.storage.get('user').then(async (data) => {
      if (data) {
        await this.user.next(data);
      }
    });
  }

  getUser() {
    return this.storage.get('user').then((data) => {
      return data;
    });
  }

  setUser(data): void {
    void this.storage.set('user', data);
    this.user.next(data);
  }

  async removeUser() {
    await this.storage.remove('user');
    await this.user.next(null);
  }


  // API FUNCTIONS
  async getUserData() {

    // const link = environment.api_url + 'user/get';

    // const loading = await this.loadingController.create({
    //   message: 'Aguarde...'
    // });
    // await loading.present();

    // const user: User = await this.getUser();

    // const formData = new FormData();
    // formData.append('access_token', user.access_token);

    // try {
    //   const userResponse: any = await this.http.post(link, formData).toPromise();
    //   await loading.dismiss();

    //   let message = null;
    //   if (!userResponse) {
    //     message = 'Erro na verificação de dados';
    //   } else if (userResponse && userResponse.status === 'error') {
    //     message = 'Erro na verificação dos dados: ' + userResponse.message;
    //   } else {
    //     this.setUser(userResponse.user);
    //   }

    //   if (message) {
    //     const alert = await this.alertController.create({ message });
    //     await alert.present();
    //   }


    // } catch (e) {
    //   await loading.dismiss();
    //   const alert = await this.alertController.create({ message: e });
    //   await alert.present();
    // }

    // return user;
  }

  // createUser(formData) {
  //   const link = environment.api_url + 'user/create';
  //   return this.http.post(link, formData).toPromise();
  // }

  // Login / Logout Functions
  login(email: string, password: string) {
    const link = environment.api_url + 'login';

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const userResponse = {
      email,
      password
    };

    this.setUser(userResponse);
  }

  async logout() {

    const buttons = [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }, {
        text: 'Sair',
        handler: async () => {
          await this.removeUser();
          await this.router.navigateByUrl('home');
        }
      }
    ];

    const alert = await this.alertController.create({
      message: 'Tem certeza que deseja sair?',
      buttons
    });

    await alert.present();

  }
}
