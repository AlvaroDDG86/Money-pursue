import { Component } from '@angular/core';
import { NavParams, ModalController} from 'ionic-angular';
import { AgregaMovimientoPage } from '../agrega-movimiento/agrega-movimiento';
import { InfoProvider } from '../../providers/info/info';
import { Movimiento } from '../../models/Movimiento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InfoProvider]
})
export class HomePage {
  movimientos: Movimiento[] = [];
  constructor(public modalCtrl: ModalController, public infoPrv: InfoProvider) {
      this.movimientos = this.infoPrv.getMovimientos();
      console.log(this.movimientos);
  }
  abrirAgregar(){
    let profileModal = this.modalCtrl.create(AgregaMovimientoPage, { userId: 8675309 });
    profileModal.present();
  }
}
