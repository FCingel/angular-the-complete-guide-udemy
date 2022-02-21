import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  // user object not directly related to form. Just used for storing form data. Field names do not have to match.
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // patchValue allows you to override specific controls instead of the whole form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

    // setValue sets the entire form. Clears data from fields that user may have changed
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // Accessing form with ViewChild is useful when you also want access before submitting
  onSubmit() {
    this.submitted = true;

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();      // empties all inputs and resets the form's state (valid, touched, etc). Can pass object like with setValue() to reset to specific values.
  }
}
