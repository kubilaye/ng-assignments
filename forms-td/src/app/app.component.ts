import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['Male', 'Female'];
  defaultGender = 'Female';

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*
    // approach 1
    this.signupForm.setValue({ // sets whole form
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'Male',
    });
     */
    // alternative approach
    this.signupForm.form.patchValue({ // patches a single value
      userData: {
        username: suggestedName,
      }
    });
  }

  submitForm(form: NgForm) {
    console.log(form);
  }
}
