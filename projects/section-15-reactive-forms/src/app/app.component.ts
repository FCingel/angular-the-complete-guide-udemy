import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    // Form should be initialized before rendering the template
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),     // don't put parenthesis () after validation method. We only pass the reference so Angular executes the method whenever the input of this FormControl changes.
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
