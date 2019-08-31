import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  private userData: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {
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

  async presentAlert() {
    console.log(this.userData.value);
    const alert = await this.alertController.create({
      header: 'Confirm Data',
      message: '',
      buttons: [{
        text: 'Send',
        handler: this.alertController.dismiss
      },
      {
        text: 'cancel',
        role: 'cancel',
        handler: this.alertController.dismiss
      }
    ]
    });

    await alert.present();
  }

}
