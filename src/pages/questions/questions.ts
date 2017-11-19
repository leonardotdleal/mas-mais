import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsFile } from './database/questions';
import { Question } from '../model/models';

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  private title: string;
  private description: string;
  private start: string;
  private ranking: string;
  private questions: Question[];

  constructor(public navCtrl: NavController) {
    this.title = "Mas Mais App";
    this.description = "Um jogo para reeducar a forma como você utiliza as expressões 'mas' e 'mais' no dia a dia.";
    this.start = "Iniciar";
    this.ranking = "Ranking";

    this.getQuestions();
  }

  private getQuestions():void {
    this.questions = QuestionsFile;
    //console.log(this.questions);
  }

}
