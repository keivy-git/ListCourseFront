import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../contact-service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

@Output()
messageEmitter = new EventEmitter<string>();

contactForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private msgServ: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl('Votre nom', [Validators.minLength(4), Validators.required]),
      email: new FormControl('Votre Email', [Validators.email, Validators.required]),
      message: new FormControl('Votre message', [Validators.minLength(20), Validators.maxLength(200), Validators.required])
    })
  }
onSubmit(form: FormGroup) {
  console.log(form);

  if(this.contactForm.valid)
  this.msgServ.addMessage(this.contactForm.value.message);
  else
    alert("Le formulaire est invalide");
}
}
