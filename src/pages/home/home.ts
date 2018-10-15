import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewCarPage } from '../newcar/newcar';

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
        this.navCtrl.push(NewCarPage);
    }

}
