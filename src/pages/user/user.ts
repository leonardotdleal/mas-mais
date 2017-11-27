import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  private id: number;
  private nickname: string;

  constructor(public navCtrl: NavController) {
  }

  public setNickName(nickname: string) {
    this.nickname = nickname;
  }

  public startGame():void {
    this.navCtrl.push(QuestionsPage);
  }


}
