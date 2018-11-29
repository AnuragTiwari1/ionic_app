import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from '../../providers/common.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {email: "",password:""};
  constructor(public navCtrl: NavController,public commonServices:CommonService) {
    this.user.email="admin@gmail.com";
    this.user.password="1234";
  }

  logIn() {
    console.log("login api will be called");
    this.commonServices.login(this.user);
  }

  forgotPassword() {
    console.log("forgot password");
  }
}
