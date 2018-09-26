import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MultasPage } from '../pages/multas/multas';
import { NewCarPage } from '../pages/newcar/newcar';
import { RsToolbarComponent } from '../components/rs-toolbar/rs-toolbar';
import { TenenciaPageModule } from '../pages/tenencia/tenencia.module';
import { TenenciaPage } from '../pages/tenencia/tenencia';
import { VerificacionPage } from '../pages/verificacion/verificacion';
import { PerfilPage } from '../pages/perfil/perfil';
import { AutoProvider } from '../providers/auto/auto';
import { MultasProvider } from '../providers/multas/multas';
import { AutoHideDirective } from '../directives/auto-hide/auto-hide';
import { PayMultaPage } from '../pages/pay-multa/pay-multa';

// Mapa
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MultasPage,
    NewCarPage,
    RsToolbarComponent,
    TenenciaPage,
    VerificacionPage,
    PerfilPage,
    AutoHideDirective,
    PayMultaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBeCwwpl9rh_EGBNP_0BDYq0-ppdJlI-Uo'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MultasPage,
    NewCarPage,
    TenenciaPage,
    VerificacionPage,
    PerfilPage,
    PayMultaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutoProvider,
    MultasProvider
  ]
})
export class AppModule {}
