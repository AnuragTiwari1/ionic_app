import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CommonService} from '../../providers/common.service'
import Index from '../op/op'
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {email: "",password:""};
  private userInfo: any;
  constructor(
    public nav: NavController,
    public commonServices:CommonService,
    public toastCtrl: ToastController
  ) {
    this.user.email="admin@gmail.com";
    this.user.password="1234";
  }

  logIn() {
    this.user['deviceId'] = localStorage.getItem('DeviceToken');
    console.log("login data>>>>",this.user);
    this.commonServices.login(this.user).then(response =>{
      // @ts-ignore
      if(response.success != undefined){
        // @ts-ignore
        this.userInfo = response.success;
        this.nav.push(Index,{user:this.userInfo});
        localStorage.setItem('userId',this.userInfo.id);
      }
      else{
        // @ts-ignore
        this.presentToast(response.error)
      }
    });
  }

  forgotPassword() {
    console.log("forgot password");
  }

  presentToast(error) {
    const toast = this.toastCtrl.create({
      message: error,
      duration: 3000
    });
    toast.present();
  }
}
