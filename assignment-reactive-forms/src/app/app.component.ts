import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null, [Validators.required, CustomValidators.forbiddenProjectNames],
        CustomValidators.forbiddenProjectNamesAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null),
    });
  }

  onSubmitProjectForm() {
    console.log(this.projectForm);
  }
}
