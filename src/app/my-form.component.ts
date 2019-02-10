import { Component, OnInit,Input } from '@angular/core';
import {  FormGroup } from '@angular/forms';
@Component({
  selector: 'address',
  templateUrl: './my-form.component.html',
  styleUrls: []
})
export class MyFormComponent implements OnInit {
  @Input('group')
  public addressForm: FormGroup;

  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  countries = [
    {name: 'India', abbrev: 'IND'},
    {name: 'United State', abbrev: 'USA'},
    {name: 'United Kingdom', abbrev: 'UK'},
  ]
  constructor() { }
  ngOnInit() {
  }
}