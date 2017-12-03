import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Question } from '../model/models';
// import { HomePage } from '../home/home';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class ScorePage {
  private image: string;
  private points: number = 0;

  constructor(public navCtrl: NavController) {
    this.image = "../../assets/imgs/oh-no.png";
  }



}
