import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  private userData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userData = this.formBuilder.group({
      name: [''],
      lastName: [''],
      email: [''],
      enquiry: ['']
    });
  }

  logForm() {
    console.log(this.userData.value);
  }

}
