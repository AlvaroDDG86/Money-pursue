import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController) {
  }

  cerrarModal(){
    var data = {};
    this.viewCtrl.dismiss(data);
  }

}
