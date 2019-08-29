import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-options-slider-cards',
  templateUrl: './courses-options-slider-cards.component.html',
  styleUrls: ['./courses-options-slider-cards.component.scss'],
})
export class CoursesOptionsSliderCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
}
