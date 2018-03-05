import { Component } from '@angular/core';
import { NavParams, ModalController} from 'ionic-angular';
import { AgregaMovimientoPage } from '../agrega-movimiento/agrega-movimiento';
import { InfoProvider } from '../../providers/info/info';
import { Movimiento } from '../../models/Movimiento';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InfoProvider]
})
export class HomePage {
  movimientos: Movimiento[] = [];
  constructor(public modalCtrl: ModalController,
            public infoPrv: InfoProvider,
            public toastCtrl: ToastController) {
      this.movimientos = this.infoPrv.getMovimientos();
  }
  abrirAgregar(){
    let profileModal = this.modalCtrl.create(AgregaMovimientoPage);
    profileModal.present();
  }
  editar(movimiento){
    let profileModal = this.modalCtrl.create(AgregaMovimientoPage, {movimiento});
    profileModal.present();
  }
  eliminar(movimiento){
    let result = this.infoPrv.eliminarMovimiento(movimiento);
    this.presentToast(result? 'Movimiento eliminado': 'No se ha podido eliminar');
  }
  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }
}
