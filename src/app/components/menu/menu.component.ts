import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public user: User = null;

  public links = [
    {
      title: 'Usuários',
      url: '/users'
    },
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private menu: MenuController,
    private modalController: ModalController,
  ) {
  }

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
      this.router.navigateByUrl(url);
    });
  }

  async openLoginModal() {
    await this.menu.close();
    await this.modalController.create({ component: LoginModalComponent });
  }

  async logout() {
    await this.userService.logout();
  }
}
