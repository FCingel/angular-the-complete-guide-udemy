import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  statuses = ['Stable', 'Critical', 'Finished'];
  reactiveSignupForm: FormGroup;

  ngOnInit(): void {
      this.reactiveSignupForm = new FormGroup({
        projectName: new FormControl(null, [Validators.required, CustomValidators.projectNameValidator], CustomValidators.asyncProjectNameValidator),
        email: new FormControl(null, [Validators.required, Validators.email]),
        status: new FormControl(this.statuses[1])
      })
  }

  onSubmit() {
    console.log(this.reactiveSignupForm);
  }
}
