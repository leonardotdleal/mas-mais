import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsFile } from './database/questions';
import { Question } from '../model/models';
import { HomePage } from '../home/home';
import { ScorePage } from "../score/score";

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  private index: number = 1;
  private question: Question;
  private questions: Array<Question>;
  private points: number = 0;

  constructor(public navCtrl: NavController) {
    this.getQuestions();
    this.displayActualQuestion();
  }

  private getQuestions(): void {
    this.questions = QuestionsFile;
  }

  private displayActualQuestion(): void {
    if (this.index <= this.questions.length) {
      this.question = this.questions.find(question => question.id === this.index);
      this.question.description = this.question.description.replace("mas", "____").replace("mais", "____");
    } else {
      console.log(this.points);
      this.navCtrl.push(ScorePage);
    }
  }

  private selectAnswer(option: Question.AnswerEnum): void {
    if (option === this.question.answer)
      this.points++;
      
    this.index++;
    this.displayActualQuestion();
  }

}
