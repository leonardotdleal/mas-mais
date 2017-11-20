import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsFile } from './database/questions';
import { Question } from '../model/models';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  private index: number = 1;
  private question: Question;
  private questions: Question[];

  constructor(public navCtrl: NavController) {
    this.getQuestions();
    this.displayActualQuestion();
  }

  private getQuestions(): void {
    this.questions = QuestionsFile;
  }

  private displayActualQuestion(): void {
    if (this.index <= this.questions.length)
      this.question = this.questions.find(question => question.id === this.index);
    else
      this.navCtrl.push(HomePage);
  }

  private selectAnswer(option: Question.AnswerEnum): void {
    this.index++;
    console.log(this.index);
    console.log(option);
    this.displayActualQuestion();
  }

}
