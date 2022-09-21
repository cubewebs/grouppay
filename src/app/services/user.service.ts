import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getUsersResponse } from '../interfaces/getUsersResponse.interface';
import { LoginForm } from '../interfaces/login.interface';
import { RegisterForm } from '../interfaces/register-form.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(formData: RegisterForm) {
    return this.http.post(`${ base_url }/users`, formData);
  }

  login( formData: Partial<{ email: string | null; password: string | null; remember: boolean | null; }> ) {
    return this.http.post(`${ base_url }/login`, formData).pipe(
      tap( (resp: any) => {
          localStorage.setItem('token', resp.token)
        }
      )
    )
  }

  getUsers() {
    return this.http.get<getUsersResponse>(`${ base_url }/users`)
  }
}
