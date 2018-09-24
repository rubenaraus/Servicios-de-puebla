import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewCarPage } from '../newcar/newcar';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    goNewCar(){
        this.navCtrl.push(NewCarPage);
    }

}
