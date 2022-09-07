import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(44)]],
      password: ['', [Validators.required, Validators.maxLength(44), Validators.minLength(6)]]
    });
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  submit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value);

  }
}
