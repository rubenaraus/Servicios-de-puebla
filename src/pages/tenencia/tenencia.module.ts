import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TenenciaPage } from './tenencia';

@NgModule({
  declarations: [
    TenenciaPage
  ],
  imports: [
    IonicPageModule.forChild(TenenciaPage),
  ],
  entryComponents: [TenenciaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TenenciaPageModule { }
