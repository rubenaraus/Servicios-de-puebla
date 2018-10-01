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
        let data = this.navParams.get('data');
        console.log(data);
        
    }

}
