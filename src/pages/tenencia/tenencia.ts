import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutoProvider } from '../../providers/auto/auto';
import { Auto } from '../../models/auto.model';


@IonicPage()
@Component({
    selector: 'page-tenencia',
    templateUrl: 'tenencia.html',
})
export class TenenciaPage {

    autoSelected: Auto;

    constructor(public navCtrl: NavController, public navParams: NavParams, private autoProvider: AutoProvider) {
        this.autoSelected = this.autoProvider.getAutoSelected();
        console.log(this.autoSelected);
        
    }

    ionViewDidLoad() {
        
    }

}
