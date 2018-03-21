import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

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
      'projectName': new FormControl(null, [Validators.required], this.forbiddenProjectNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null),
    });
  }

  onSubmitProjectForm() {
    console.log(this.projectForm);
  }

  forbiddenProjectNames_old(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'forbiddenName': true};
    }
    return null;
  }

  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test') {
            resolve({'forbiddenName': true});
          }
          resolve(null);
        }, 1000);
      }
    );
    return promise;
  }
}
