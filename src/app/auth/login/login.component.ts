import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ['test@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
    remember: [false]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login( this.loginForm.value )
      .subscribe({
        next: resp => {
          console.log(resp)
        },
        error: err => {
          // Need Toast so send an error message to the user
          console.log(err)
        },
        complete: () => console.log('Completed')
      })
    // this.router.navigateByUrl('/')
  }

}
