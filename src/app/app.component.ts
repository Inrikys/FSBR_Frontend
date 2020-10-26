import { Component } from '@angular/core';

import { MenuController, ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';
import { User } from './interfaces/user/user';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private router: Router,
    private menu: MenuController,
    private modalController: ModalController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public user: User = null;

  public links = [
    {
      title: 'Usuários',
      url: '/users'
    },
  ];

  ngOnInit() {
    // this.userService.user.subscribe((data) => {
    //   this.user = data;
    // });
    this.user = {
      name: 'Henrique',
      email: 'henrique@henrique',
      cpf: 'teste',
      access_token: 'teste'
    };
  }

  goToUrl(url) {
    this.menu.close().then(() => {
      console.log(url);
      this.router.navigateByUrl(url);
    });
  }

  async openLoginModal() {
    await this.menu.close();
    const modal = await this.modalController.create({ component: LoginModalComponent });
    await modal.present();
  }

  async logout() {
    await this.userService.logout();
  }


}
