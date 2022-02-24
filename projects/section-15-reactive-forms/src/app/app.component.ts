import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    // Casting to a FormArray is required
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Newer versions of Angular require you to get the control in a method or getter since it does not understand TS in template
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // Alternative to the method above can use a getter (In template: let hobbyControl of controls)
  // get controls() {
  //   return (this.signupForm.get('hobbies') as FormArray).controls;
  // }
}
