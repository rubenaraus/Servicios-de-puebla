import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MultasProvider } from '../../providers/multas/multas';
import { Multa } from '../../models/multa.model';

@IonicPage()
@Component({
  selector: 'multas',
  templateUrl: 'multas.html',
})
export class MultasPage {

    multas: Multa[];

    constructor(private multasProvider: MultasProvider) {
        this.multasProvider.getMultasList()
        .subscribe((multas: Multa[]) => {
            this.multas = multas;
            console.log(this.multas);
            
        })
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad MultasPage');
    }

}
