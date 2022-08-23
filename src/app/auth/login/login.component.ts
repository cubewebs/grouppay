import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
