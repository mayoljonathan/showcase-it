import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';
import { BrowserTab } from '@ionic-native/browser-tab';
import { ShareButtonsModule } from 'ngx-sharebuttons';

// Custom UI Import
// import "materialize-css";
// import { MaterializeModule } from "angular2-materialize";

// Modules
import { AngularFireModule } from 'angularfire2';
import { IonicStorageModule } from '@ionic/storage';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { MaterialIconsModule } from 'ionic2-material-icons';
import { Facebook } from '@ionic-native/facebook';
import { TooltipsModule } from 'ionic-tooltips';
// import { TooltipModule } from 'angular2-tooltips';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MasonryModule } from 'angular2-masonry';

import { ReCaptchaModule } from 'angular2-recaptcha';
import { StarRatingModule } from 'angular-star-rating';

// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Directives
import { Focuser } from "../shared/directives";
// Providers
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService,CacheService,AppService,FileService,ApkService,SearchService,ReportService } from "../shared/services"; 
import { PlatformUtil,DialogUtil,HelperUtil } from "../shared/utils"; 

import { ComponentsModule } from "../components/components.module";

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDsUKRYcTMx0EI2jtLAKY84j2dM9vTKW68",
    authDomain: "showcase-it.firebaseapp.com",
    databaseURL: "https://showcase-it.firebaseio.com",
    projectId: "showcase-it",
    storageBucket: "showcase-it.appspot.com",
    messagingSenderId: "648259907848"
};

@NgModule({
  declarations: [
    MyApp,
    Focuser,
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // TooltipModule,
    ComponentsModule,
    IonicImageViewerModule,
    MasonryModule,
    ReCaptchaModule,
    // MateralizeCSSModule,
    // MaterializeModule,
    // NgxDatatableModule,
    // MaterializeModule,
    HttpModule,
    MaterialIconsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    ShareButtonsModule.forRoot(),
    StarRatingModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    // TooltipsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,SplashScreen,ScreenOrientation,Network,InAppBrowser,Device,BrowserTab,
    Facebook,
    UserService,CacheService,AppService,FileService,ApkService,SearchService,ReportService,
    PlatformUtil,DialogUtil,HelperUtil,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,AngularFireAuth
  ]
})
export class AppModule {
  constructor(){
      let url = window.location.href;
      var parts = url.split('#');
      // console.log(parts);
      let endUrl = parts[1];
      if(endUrl !== 'startup'){
        window.location.href = `#/startup?req=${endUrl}`;
      }
  }
}
