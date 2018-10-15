import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewCarPage } from '../newcar/newcar';
import { QrScanPage } from '../qr-scan/qr-scan';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    newCar: Object;

    constructor(public navCtrl: NavController) {
        this.newCar = NewCarPage;
    }

    ionViewDidLoad() {
        
    }

    goNewCar(){
        console.log('goQrScan');        
        this.navCtrl.push(QrScanPage);
    }

}
