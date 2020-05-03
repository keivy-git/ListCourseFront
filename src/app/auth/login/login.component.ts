import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string= '';
  password: string= '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
redirect() {
  alert("Connexion tenté")
  this.router.navigateByUrl("/home");
}
}
