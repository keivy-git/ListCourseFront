import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

  title: string = "Réaliser votre liste de course";
  h1Classes: string = "bigTitle";
  color: string = "#113E5C";

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor(
    private loginService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  connected() {
    return this.loginService.isConnected()
  }

  logOut() {
    return this.loginService.logOut()
  }
}
