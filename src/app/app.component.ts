import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      stars: new FormControl({ value: 0, disabled: false }, [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
