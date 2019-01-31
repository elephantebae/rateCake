import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: any;
  newReview: any;
  cakes: any;
  selectedCake: any = null;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.newCake = { name: "", cake: "" };
    this.newReview = { comments: "", rating: "" };
    this.getAllCakes();
  }
  getAllCakes() {
    let observable = this._httpService.getAllCakes();
    observable.subscribe(data => {
      this.cakes = data;
      console.log(this.cakes);
    })
  }
  addNewCake() {
    let observable = this._httpService.createCake(this.newCake);
    observable.subscribe(data => {
      console.log("we got the new cake", data);
      this.getAllCakes();
    })
  }
  getOneCake(cake) {
    this.selectedCake = cake;
    console.log(cake);
  }
}

