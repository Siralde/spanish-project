import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CoursesOptionsSliderCardsComponent } from 'src/app/components/courses-options-slider-cards/courses-options-slider-cards.component';
import { FormComponent } from 'src/app/components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, CoursesOptionsSliderCardsComponent, FormComponent]
})
export class HomePageModule {}
