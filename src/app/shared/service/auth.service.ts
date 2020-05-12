import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/auth/user/list/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(
    private api: HttpClient,
  ) { }

  get() {
    return this.api.get<User[]>(this.apiUrl + "api-user/")
  }

  post(toAdd) {
    return this.api.post<User>(this.apiUrl + "api-user/create", toAdd)
  }

}
