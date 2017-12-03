import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionsPage } from '../pages/questions/questions';
<<<<<<< HEAD
import { ScorePage } from "../pages/score/score";
=======
import { UserPage } from '../pages/user/user';
>>>>>>> 62ba71e619e9ca6acde9758e5c83ea1e15e011b6

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionsPage,
<<<<<<< HEAD
    ScorePage
=======
    UserPage
>>>>>>> 62ba71e619e9ca6acde9758e5c83ea1e15e011b6
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionsPage,
<<<<<<< HEAD
    ScorePage
=======
    UserPage
>>>>>>> 62ba71e619e9ca6acde9758e5c83ea1e15e011b6
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
