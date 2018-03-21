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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  formSubmitted = false;

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
    this.formSubmitted = true;
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secretQuestion = form.value.secret;
    this.user.answer = form.value.questionAnswer;
    this.user.gender = form.value.gender;
    form.reset(); // or .setValue() with an empty object
  }
}
