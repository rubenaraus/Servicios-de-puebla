import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Multa } from '../../models/multa.model';

@Injectable()
export class MultasProvider {

    multas: Multa[];

    constructor() {
        
        this.multas = [{
            id: 5,
            dateEmit: new Date(),
            dateExpiration: new Date(),
            description: 'Velocidad a 90km/h',
            paid: false,
            location: '',
            latitude: 25.667945,
            longitude: -100.343567,
            amount: 125.90,
        }, {
            id: 4,
            dateEmit: new Date(),
            dateExpiration: new Date(),
            description: 'Pasó un semaforo en rojo',
            paid: false,
            location: '',
            latitude: 25.667945,
            longitude: -100.343567,
            amount: 55.90,
        }, {
            id: 3,
            dateEmit: new Date(),
            dateExpiration: new Date(),
            description: 'Estacionamiento en lugar prohibido',
            paid: true,
            location: '',
            latitude: 25.667945,
            longitude: -100.343567,
            amount: 30.01,
        },{
            id: 2,
            dateEmit: new Date(),
            dateExpiration: new Date(),
            description: 'Velocidad a 120kh',
            paid: true,
            location: '',
            latitude: 25.667945,
            longitude: -100.343567,
            amount: 310.70,
        },{
            id: 1,
            dateEmit: new Date(),
            dateExpiration: new Date(),
            description: 'Velocidad a 115kh',
            paid: true,
            location: '',
            latitude: 25.667945,
            longitude: -100.343567,
            amount: 310.70,
        }
    ];
    }

    getMultasList(): Observable<Multa[]> {
        return new Observable((observer) => {
            observer.next(this.multas);
        });
    }

}
