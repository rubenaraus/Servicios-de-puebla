import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Multa } from '../../models/multa.model';

@IonicPage()
@Component({
    selector: 'page-pay-multa',
    templateUrl: 'pay-multa.html',
})
export class PayMultaPage {

    multas: Multa[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.multas = this.navParams.get('data') as Multa[];
        console.log(this.multas[0].description);    
        
    }

}
