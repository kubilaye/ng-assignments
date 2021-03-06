import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';

export class CustomValidators {
  static forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'forbiddenName': true};
    }
    return null;
  }

  static forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test2') {
            resolve({'forbiddenName': true});
          }
          resolve(null);
        }, 1000);
      }
    );
    return promise;
  }
}
