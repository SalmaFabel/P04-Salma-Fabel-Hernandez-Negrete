import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { url } from 'inspector';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('list');
      this.splashScreen.hide();
    });
  }
  AppPages=[{
    title:'home',
    url:'/home',
    icon:'home'

  },
  {
title:'investigacion',
url:'/invvestigacion',
icon:' '
  },
{
  title:'MyAccount',
  url:'Account',
  icon:'user'
}]
}
