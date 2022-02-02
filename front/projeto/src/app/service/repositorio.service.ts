import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositorio } from '../model/Repositorio';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  constructor(
    private http: HttpClient
  ) { }

    pesquisarRepositorio(usuario: string): Observable<Repositorio[]>{
      return this.http.get<Repositorio[]>(`https://api.github.com/users/${usuario}/repos?per_page=50`)
    }

    pesquisarRepositorioEstrela(usuario: string): Observable<Repositorio[]>{
      return this.http.get<Repositorio[]>(`https://api.github.com/users/${usuario}/starred`)
    }

}
