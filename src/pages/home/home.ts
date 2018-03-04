import { Component } from '@angular/core';
import { NavParams, ModalController} from 'ionic-angular';
import { AgregaMovimientoPage } from '../agrega-movimiento/agrega-movimiento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {

  }
  abrirAgregar(){
    let profileModal = this.modalCtrl.create(AgregaMovimientoPage, { userId: 8675309 });
    profileModal.present();
  }
}
