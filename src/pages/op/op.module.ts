import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import OpPage  from './op';

@NgModule({
  declarations: [
    OpPage,
  ],
  imports: [
    IonicPageModule.forChild(OpPage),
  ],
})
export class OpPageModule {}
