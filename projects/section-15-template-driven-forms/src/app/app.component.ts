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
    console.log(this.signupForm);
  }
}
