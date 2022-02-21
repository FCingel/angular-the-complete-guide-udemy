import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement', {static: false}) subForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub = "Advanced";
  formSubmitted = false;
  subData = {
    email: '',
    sub: '',
    password: ''
  }

  onSubmit() {
    this.subData.email = this.subForm.value.email;
    this.subData.sub = this.subForm.value.subscription;
    this.subData.password = this.subForm.value.password;
    console.log(this.subForm);

    this.formSubmitted = true;
  }
}
