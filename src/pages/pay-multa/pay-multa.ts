import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-pay-multa',
    templateUrl: 'pay-multa.html',
})
export class PayMultaPage {

    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

}
