import { Component, OnInit } from '@angular/core';
import {  UntypedFormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password ='';
  isPasswordVisible: boolean = false;
  
  constructor(
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
  }

  login() {
    this.navCtrl.navigateRoot('tabs/dashboard');
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
