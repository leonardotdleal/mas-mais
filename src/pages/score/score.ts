import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { QuestionsPage } from "../questions/questions";

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class ScorePage {
  private image: string;
  public points: number;
  private qpage: QuestionsPage = new QuestionsPage(null);

  constructor(public navCtrl: NavController) {
    this.points = QuestionsPage.points;
    this.image = this.getImageFinish();
  }

  private getImageFinish(): string {
    if (this.points < 5)
      return "../../assets/imgs/bad.png";
    else if (this.points >= 5 && this.points < 7)
      return "../../assets/imgs/oh-no.png";
    else
      return "../../assets/imgs/lol.png";
  }

  private nextPage(): void {
    this.navCtrl.push(HomePage);
  }
}
