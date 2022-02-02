import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRetorno } from '../model/UserRetorno';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  exibir(usuario: String): Observable<UserRetorno>{
    return this.http.get<UserRetorno>(
      `https://api.github.com/users/${usuario}`
    );
  }
}
