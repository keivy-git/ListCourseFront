import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ShoppingList } from '../shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  apiUrl = environment.apiUrl;

  constructor(
    private api: HttpClient,
  ) { }


  get() {
    return this.api.get<ShoppingList[]>(this.apiUrl + "api-product/")
  }

  post(toAdd) {
    return this.api.post<ShoppingList>(this.apiUrl + "api-product/create", toAdd)
  }

  delete(shopping) {
    return this.api.delete<ShoppingList>(this.apiUrl + "api-product/delete/" + shopping.idProduct, shopping)
  }
}
