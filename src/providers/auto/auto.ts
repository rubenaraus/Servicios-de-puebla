import { Injectable } from '@angular/core';
import { AUTO_SELECTED, AUTOS_SAVED } from '../../shared/constants';
import { Auto } from '../../models/auto.model';

@Injectable()
export class AutoProvider {

    constructor() {
        console.log('Hello AutoProvider Provider');
        this.initAuto();
    }

    initAuto(){
        let autos: Auto[] = [
            {
                id: 1,
                brand: 'Volkswagen',
                model: 'Vento',
                plates: 'STP-4587',
                year : 2017,
            },{
                id: 2,
                brand: 'Toyota',
                model: 'Siena',
                plates: 'TTR-2587',
                year : 2015,
            },{
                id: 3,
                brand: 'Nissan',
                model: 'Versa',
                plates: 'RRP-1452',
                year : 2017,
            },{
                id: 4,
                brand: 'Ford',
                model: 'Focus',
                plates: 'WSA-1247',
                year : 2018,
            }
        ];
        
        this.setAutos(autos);
        let result = this.getAutos();
        this.setAutoSelected(autos[0]);
        console.log(result);
        
    }

    getAutoSelected(): Auto {
        let item = localStorage.getItem(AUTO_SELECTED);
        return JSON.parse(item) as Auto || null;
    }

    setAutoSelected(idAuto: Auto){
        localStorage.setItem(AUTO_SELECTED, JSON.stringify(idAuto));
    }

    setAutos(autos: Auto[]){
        localStorage.setItem(AUTOS_SAVED, JSON.stringify(autos));
    }

    getAutos(): Auto[] {
        let autos = JSON.parse(localStorage.getItem(AUTOS_SAVED)) as Auto[];
        return autos;
    }

    addAuto(auto: Auto){

    }

}
