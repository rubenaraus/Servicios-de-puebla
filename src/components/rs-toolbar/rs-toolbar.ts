import { Component, Input, OnInit } from '@angular/core';
import { AutoProvider } from '../../providers/auto/auto';
import { Auto } from '../../models/auto.model';

@Component({
    selector: 'rs-toolbar',
    templateUrl: 'rs-toolbar.html'
})
export class RsToolbarComponent implements OnInit {

    @Input('title') title: string = 'Blank';
    autoList: Auto[];
    currentAuto: Auto;

    constructor(private autoProvider: AutoProvider) {
        this.autoList = this.autoProvider.getAutos();      
        
    }

    ngOnInit(): void {
        this.currentAuto = this.autoProvider.getAutoSelected();
        console.log(this.currentAuto);
    }

    changeAutoSelected(id: number){
        let auto = this.autoProvider.getAutos().filter((auto) => auto.id = id)[0];
        this.autoProvider.setAutoSelected(auto);
        
    }

}
