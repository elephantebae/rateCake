import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "./../http.service";
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() cakeIdToRate: any;
  newReview: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newReview = { comments: "", rating: "" };
    console.log(this.cakeIdToRate)
  }
  addingReview() {
    let observable = this._httpService.addReview(this.cakeIdToRate, this.newReview);
    observable.subscribe(data => {
      console.log(this.cakeIdToRate);
      this.newReview = { comments: "", rating: "" };
      console.log("got the new review in", data);
    })

  }
}
