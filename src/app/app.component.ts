import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Page } from '../models/page.model';
import { MultasPage } from '../pages/multas/multas';
import { TenenciaPage } from '../pages/tenencia/tenencia';
import { VerificacionPage } from '../pages/verificacion/verificacion';
import { PerfilPage } from '../pages/perfil/perfil';
@Component({
  templateUrl: 'app.html',
})
export class MyApp {
    rootPage:any = HomePage;

    pages: Page[] = [];

    constructor(platform: Platform, statusBar: StatusBar,
        splashScreen: SplashScreen) {
        platform.ready().then(() => {
          statusBar.styleDefault();
          splashScreen.hide();
        });
        this.initPages();
    }

    initPages(){
        this.pages = [
            {
                name: 'Home',
                icon: 'home',
                page: HomePage
            },{
                name: 'Multas',
                icon: 'copy',
                page: MultasPage
            },{
                name: 'Tenencia',
                icon: 'clipboard',
                page: TenenciaPage
            },{
                name: 'Verificación',
                icon: 'car',
                page: VerificacionPage
            },{
                name: 'Servicios',
                icon: 'navigate'
            },{
                name: 'Reportes',
                icon: 'folder'
            },{
                name: 'Perfil',
                icon: 'contact',
                page: PerfilPage
            }
        ];
    }

    goPage(page: Page){
        if (page.page) {
            this.rootPage = page.page;
        }
    }
}
