import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {LoginModalComponent} from '../../components/modals/login-modal/login-modal.component';
import {AccessService} from '../../services/access/access.service';

@Injectable({
    providedIn: 'root'
})
export class AccessGuard implements CanActivate {

    constructor(
        private modalController: ModalController,
        private storage: Storage,
        private accessService: AccessService,
        private router: Router,
    ) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Get connection
        const canAccess = await this.accessService.canNavigate();

        if (!canAccess) {
            return false;
        } else {
            // Load customer
            const customer = await this.storage.get('customer');

            if (customer) {
              await this.router.navigateByUrl('home');
            } else {
                const modal = await this.modalController.create({component: LoginModalComponent});
                await modal.present();
                await this.router.navigateByUrl('home');
                return false;
            }
        }
    }
}
