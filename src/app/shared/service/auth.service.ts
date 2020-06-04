import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/auth/user/list/user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(
    private api: HttpClient,
    private router: Router
  ) { }

  get() {
    return this.api.get<User[]>(this.apiUrl + "api-user/")
  }

  post(toAdd) {
    return this.api.post<User>(this.apiUrl + "api-user/create", toAdd)
  }
  authenticate(username, password) {
    return this.api.post<any>(this.apiUrl + "api-user/login", { username, password }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let tokenString = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenString);
          return userData;
        }
      )

    );
  }

  isConnected(): boolean {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
    this.router.navigate(['login'])


  }
}
