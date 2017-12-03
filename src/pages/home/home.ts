import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private title: string;
  private description: string;
  private start: string;
  private ranking: string;

  constructor(public navCtrl: NavController) {
    this.title = "Mas Mais";
    this.description = "Um jogo para reeducar a forma como você utiliza as expressões 'mas' e 'mais' no dia a dia.";
    this.start = "Iniciar Jogo";
    this.ranking = "Ranking";
  }

  public startGame():void {
    this.navCtrl.push(QuestionsPage);
  }

  public viewRanking():void {
    //this.navCtrl.push(RankingPage);
  }

}
