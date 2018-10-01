import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MultasProvider } from '../../providers/multas/multas';
import { Multa } from '../../models/multa.model';
import { PayMultaPage } from '../pay-multa/pay-multa';

@IonicPage()
@Component({
    selector: 'multas',
    templateUrl: 'multas.html',
})
export class MultasPage {

    multas: Multa[];
    amountToPay: number = 0;
    payMultasPage = PayMultaPage;

    constructor(private multasProvider: MultasProvider, public navCtrl: NavController) {
        this.multasProvider.getMultasList()
        .subscribe((multas: Multa[]) => {
            this.multas = multas;
            this.calculateAmountToPay();
        })
    }
    
    calculateAmountToPay(){
        if (this.multas) {
            this.multas.forEach((multa: Multa) => {
                if (!multa.paid) {
                    this.amountToPay += multa.amount;
                }
            });
        }
    }

    goPayMulta(item: Multa ){
        if (!item) {
            let data = this.multas.filter((multa: Multa) => !multa.paid)
            this.navCtrl.push(this.payMultasPage, { data });
            
        } else {
            let data = { item }
            this.navCtrl.push(this.payMultasPage, [data]);
        }
    }

}
