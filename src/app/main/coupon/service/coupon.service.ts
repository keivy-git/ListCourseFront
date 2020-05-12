import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../coupon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  apiUrl = environment.apiUrl;

  constructor(
    private api: HttpClient,
  ) { }

  get() {
    return this.api.get<Coupon[]>(this.apiUrl + "api-coupon/")
  }

  post(toAdd) {
    return this.api.post<Coupon>(this.apiUrl + "api-coupon/create", toAdd)
  }

  delete(coupon) {
    return this.api.delete<Coupon>(this.apiUrl + "api-coupon/delete/" + coupon.idCoupon, coupon)
  }

  update(coupon) {
    return this.api.put<Coupon>(this.apiUrl + "api-coupon/update/" + coupon.idCoupon, coupon)
  }
}
