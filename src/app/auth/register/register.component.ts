import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formSubmitted: boolean = false;

  public registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    password2: ['123456', [Validators.required, Validators.minLength(6)]],
    terms: [false, [Validators.required]]
  }, {
    validators: this.passwordsIquals('password', 'password2')
  } )

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createUser() {
    this.formSubmitted = true;
    console.log(this.registerForm.value)

    if( this.registerForm.valid) {
      console.log('Form Submitted')
      
    } else {
      console.log('The form is not correct...')
      
    }
    
  }

  passwordsNotValid() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if( (pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }

  }

  fieldNotValid( field: string ): boolean {
    if( this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  aceptTerms() {
    return !this.registerForm.get('terms')?.value && this.formSubmitted;
  }

  passwordsIquals(pass1Name: string, pass2Name: string) {
    return ( FormGroup: FormGroup ) => {
      const pass1Control = FormGroup.get(pass1Name);
      const pass2Control = FormGroup.get(pass2Name);

      if( pass1Control?.value === pass2Control?.value ) {
        pass2Control?.setErrors(null)
      } else {
        pass2Control?.setErrors({ notEqual: true })
      }
    }
  }

}
