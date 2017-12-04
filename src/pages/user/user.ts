import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionsPage } from '../questions/questions';
import { User } from '../model/models';
import { UsersFile } from '../database/users';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  private userForm: FormGroup;
  private user: User;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.user = { id: 1, nickname: "", score: 0 };
    this.userForm = this.formBuilder.group({
      id: 0,
      nickname: ['', Validators.required],
      score: 0
    });
  }
  
  public startGame(): void {
    this.setUser();
    UsersFile.push(this.user);
    this.navCtrl.push(QuestionsPage);
  }

  private setUser():void {
    this.user.nickname = this.userForm.value.nickname;
  }

}
