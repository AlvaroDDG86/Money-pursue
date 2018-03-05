import { Injectable } from '@angular/core';
import {Movimiento} from '../../models/Movimiento';

/*
  Generated class for the InfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InfoProvider {
  movimientos : Movimiento[] = [{
    cantidad: 10,
    negativo: !0,
    detalle: 'cafés',
    fecha: new Date().toString()
  }, {
    cantidad: 1100,
    negativo: !1,
    detalle: 'Nómina',
    fecha: new Date().toString()
  },
  {
    cantidad: 38.60,
    negativo: !0,
    detalle: 'Compra zara',
    fecha: new Date().toString()
  },
  {
    cantidad: 120,
    negativo: !0,
    detalle: 'Compra casa',
    fecha: new Date().toString()
  },
  {
    cantidad: 79.90,
    negativo: !0,
    detalle: 'Zapatillas nike',
    fecha: new Date().toString()
  }, {
    cantidad: 7,
    negativo: !1,
    detalle: 'Extra',
    fecha: new Date().toString()
  }, {
    cantidad: 79.90,
    negativo: !1,
    detalle: 'Devolución de compra',
    fecha: new Date().toString()
  }, {
    cantidad: 5,
    negativo: !0,
    detalle: 'Autobús',
    fecha: new Date().toString()
  }];
  constructor() {
  }

  getMovimientos(): Movimiento[]{
    return this.movimientos;
  }
  eliminarMovimiento(movimiento: Movimiento):boolean{
      var eliminado = this.movimientos.splice(this.movimientos.indexOf(movimiento),1);
      return (eliminado != null);
  }
}
