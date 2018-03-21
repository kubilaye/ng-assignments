import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['Male', 'Female'];
  defaultGender = 'Female';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  submitForm(form: NgForm) {
    console.log(form);
  }
}
