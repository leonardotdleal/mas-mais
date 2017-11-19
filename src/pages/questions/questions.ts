import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  private title: string;
  private description: string;
  private start: string;
  private ranking: string;

  constructor(public navCtrl: NavController) {
    this.title = "Mas Mais App";
    this.description = "Um jogo para reeducar a forma como você utiliza as expressões 'mas' e 'mais' no dia a dia.";
    this.start = "Iniciar";
    this.ranking = "Ranking";
  }

  private getQuestions():void {

  }

}
