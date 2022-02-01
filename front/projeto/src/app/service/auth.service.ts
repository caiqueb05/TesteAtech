import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  exibir(usuario: String) {
    return this.http.get<User>(
      `https://api.github.com/users/${usuario}/repos?per_page=50`
    );
  }
}
