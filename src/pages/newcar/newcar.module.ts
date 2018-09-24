import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCarPage } from './newcar';

@NgModule({
  declarations: [
    NewCarPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCarPage),
  ],
})
export class NewcarPageModule {}
