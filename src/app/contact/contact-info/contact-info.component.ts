import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

    email: string ="contact@listcourse.be";
    form: string ="Formulaire de contact";

  constructor() { }

  ngOnInit(): void {
  }

}
