import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {



  contactForm: FormGroup;

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.minLength(4), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', [Validators.minLength(20), Validators.maxLength(200), Validators.required])
    })
  }
  onSubmit(form: FormGroup) {
    console.log(form);


  }
}
