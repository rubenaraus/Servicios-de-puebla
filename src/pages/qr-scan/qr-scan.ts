import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
    selector: 'page-qr-scan',
    templateUrl: 'qr-scan.html',
})
export class QrScanPage {

    constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        private qrScaner: QRScanner) {

    }
    
    ionViewWillEnter(){
        console.log('get on camera!');
        this.showCamera();
        
        // this.qrScaner.prepare()
        // .then((status: QRScannerStatus) => {
        //     if (status.authorized) {
        //         console.log('Permission given');
                
        //         let qrSub = this.qrScaner.scan()
        //         .subscribe((text) => {
        //             console.log('Scanned something', text);
        //             this.qrScaner.hide();
        //             qrSub.unsubscribe();
        //         });

        //         this.qrScaner.show();
        //     } else if (status.denied) {
        //         console.log('Permission denied');
        //     }
        // }).catch((error: any) => console.log('error: ', error));
    }

    ionViewWillLeave(){
        console.log('get off camera!');
        this.hideCamera();
        
    }

    showCamera() {
        (window.document.querySelector('ion-app') as HTMLElement)
        .classList.add('cameraView');
    }
    
    hideCamera() {
        (window.document.querySelector('ion-app') as HTMLElement)
        .classList.remove('cameraView');
    }
    
}
