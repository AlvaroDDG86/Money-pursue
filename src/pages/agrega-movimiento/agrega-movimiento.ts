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
  nuevo: boolean;
  constructor(public viewCtrl: ViewController,
            public navParams: NavParams) {
      this.movimiento = this.navParams.get("movimiento");
      if (!this.movimiento){
        this.nuevo = !0;
        this.movimiento = {
          cantidad: 0,
          detalle: '',
          fecha:new Date().toString(),
          negativo: false
        };
      }
  }

  cerrarModal(){
    var data = {};
    this.viewCtrl.dismiss(data);
  }

  guardar(){
    console.log(this.movimiento);
  }
}
