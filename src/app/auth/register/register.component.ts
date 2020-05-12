import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { User } from '../user/list/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User[];

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private auth: AuthService,
  ) {

  }

  ngOnInit(): void {
    this.formControls();
  }

  formControls() {
    this.registerForm = this.builder.group({
      firstName: new FormControl("", [Validators.required, Validators.maxLength(20)]),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });
  }
  post(form: FormGroup) {
    let toAdd = {
      firstName: form.value.firstName,
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    };
    if (this.registerForm.valid) {
      this.auth.post(toAdd)
        .subscribe(() => {
          alert("Inscription réussie")
          this.router.navigateByUrl("/home")
        });
    } else {
      alert("Formulaire invalide");
    }
  }

}
