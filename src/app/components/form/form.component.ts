import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  checkoutForm;

  constructor(private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.checkoutForm.reset();
  }

  ngOnInit() {}

}
