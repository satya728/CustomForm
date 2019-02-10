import { Component } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Custom } from './custom.interface';
import { MyFormComponent } from './my-form.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm: FormGroup;
  public myForm2: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      addresses: this._fb.array([
        this.initAddress(true),
      ])
    });
    this.myForm2 = this._fb.group({
      addresses: this._fb.array([
        this.initAddress(false),
      ])
    });
  }

  initAddress(value) {
    if (value) {
      return this._fb.group({
        country: "USA",
        state: "New York",
        start: ['1000', Validators.required],
        end: ['1900'],

      });
    } else {
      return this._fb.group({
        country: [],
        state: [],
        start: ['', Validators.required],
        end: [''],

      });
    }
  }

  addAddress(form) {
    const control = <FormArray>form.controls['addresses'];
    control.push(this.initAddress(false));
  }

  removeAddress(form, i: number) {
    const control = <FormArray>form.controls['addresses'];
    control.removeAt(i);
  }

  save(model: Custom) {
    console.log(model);
  }
}

