import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formSubmitted = false;
  subTypes = [
    'Basic', 'Advanced', 'Pro',
  ];
  defaultSubType = 'Advanced';
  sub = {
    email: '',
    subType: 'Advanced',
    password: '',
  }

  submitted(form: NgForm) {
    this.sub.email = form.value.infoGroup.email;
    this.sub.subType = form.value.infoGroup.subType;
    this.sub.password = form.value.infoGroup.password;
    this.formSubmitted = true;
    form.reset();
    form.form.patchValue({
      infoGroup: {
        subType: this.defaultSubType,
      },
    });
  }
}
