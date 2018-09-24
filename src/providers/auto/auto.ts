import { Injectable } from '@angular/core';
import { AUTO_SELECTED } from '../../shared/constants';
import { Auto } from '../../models/auto.model';

@Injectable()
export class AutoProvider {

    constructor() {
        console.log('Hello AutoProvider Provider');
    }

    getAutoSelected(): Auto {
        let item = localStorage.getItem(AUTO_SELECTED);
        return JSON.parse(item) as Auto || null;
    }

    setAutoSelected(idAuto: string){
        localStorage.setItem(AUTO_SELECTED, idAuto);
    }

    addAuto(auto: Auto){

    }

}
