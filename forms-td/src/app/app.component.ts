import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') signupForm: NgForm; // alternative

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  submitForm(form: NgForm) {
    console.log(form);
    // using view child (alternative)
    console.log(this.signupForm);
  }
}
