import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import OpPage  from './op';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    OpPage,
    ComponentsModule
  ],
  imports: [
    IonicPageModule.forChild(OpPage),
    ComponentsModule
  ],
})
export class OpPageModule {}
