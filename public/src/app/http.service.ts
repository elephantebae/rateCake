import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllCakes() {
    return this._http.get("/allCakes");
  }
  createCake(addNewCake) {
    return this._http.post("/createCake", addNewCake);
  }
  addReview(cakeIdToRate, newReview) {
    return this._http.put(`/${cakeIdToRate}`, newReview);
  }
  getOneCake(id) {
    return this._http.get("/" + id);
  }
}
