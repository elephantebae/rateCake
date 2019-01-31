import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Input() getOneCake: any;
  rating: any = 0;
  constructor() { }

  ngOnInit() {

  }
  gettingAvgRating() {

    var sum = 0;
    for (var i = 0; i < this.getOneCake.reviews.length; i++) {
      sum += this.getOneCake.reviews[i].rating;
    }
    this.rating = (sum / this.getOneCake.reviews.length);
    console.log(this.rating);
  }
}
