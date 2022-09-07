import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
<<<<<<< HEAD
import {AuthService} from "../auth.service";
=======
>>>>>>> 5a002f50e6c73bd475beb73f5726ee89e0f0aefd

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private authService: AuthService) { }
=======
  constructor(private fb: FormBuilder) { }
>>>>>>> 5a002f50e6c73bd475beb73f5726ee89e0f0aefd

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
<<<<<<< HEAD
    this.authService.register(this.registerForm.value);
=======
>>>>>>> 5a002f50e6c73bd475beb73f5726ee89e0f0aefd
  }
}
