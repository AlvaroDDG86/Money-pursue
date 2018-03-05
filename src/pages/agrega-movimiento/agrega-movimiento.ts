import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Movimiento } from '../../models/Movimiento';

/**
 * Generated class for the AgregaMovimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agrega-movimiento',
  templateUrl: 'agrega-movimiento.html',
})
export class AgregaMovimientoPage {
  movimiento: Movimiento;

  constructor(public viewCtrl: ViewController,
            public navParams: NavParams) {
    this.movimiento = this.navParams.get("movimiento");
  }

  cerrarModal(){
    var data = {};
    this.viewCtrl.dismiss(data);
  }

}
