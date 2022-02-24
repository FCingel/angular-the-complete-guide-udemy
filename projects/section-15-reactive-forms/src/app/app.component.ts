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
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    // Form should be initialized before rendering the template
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // forbiddenUsernames validator must use bind since this class does not call it. Angular calls it when it checks validity & during that time 'this' will not refer to this class
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
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


  // Validator returns a key-value pair where the key is a string and value is a boolean
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {      // indexOf returns -1 if control.value is not part of that array
      return {'nameIsForbidden': true};     // error nameIsForbidden is true
    }
    return null;      // return null if valid. Do not return {'nameIsForbidden': false}.
  }
}
