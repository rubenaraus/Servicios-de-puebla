import { Component, Input } from '@angular/core';
import { AutoProvider } from '../../providers/auto/auto';
import { Auto } from '../../models/auto.model';

@Component({
    selector: 'rs-toolbar',
    templateUrl: 'rs-toolbar.html'
})
export class RsToolbarComponent {

    @Input('title') title: string = 'Blank';
    currentCar: Auto;

    constructor(private autoProvider: AutoProvider) {
        this.currentCar = autoProvider.getAutoSelected();
        
        if (this.currentCar != null) {
            console.log('agregue un auto');
        }
    }

}
