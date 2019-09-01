import { Component, ViewChild } from '@angular/core';
import { IonContent, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent, {static: false}) content: IonContent;
  
  constructor(private alertController: AlertController) {}

  dummyFunction() {
    console.log('Hey');
  }

  scrollTo( xAxis, yAxis) {
    this.content.scrollToPoint(xAxis, yAxis, 500)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Message',
      buttons: [{
        text: 'Send',
        handler: this.alertController.dismiss
      },
      {
        text: 'cancel',
        role: 'cancel',
        handler: this.alertController.dismiss
      },
    ]
    });
  }

}
