import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Repositorio } from '../model/Repositorio';
import { UserRetorno } from '../model/UserRetorno';
import { AuthService } from '../service/auth.service';
import { RepositorioService } from '../service/repositorio.service';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css'],
})
export class RepositorioComponent implements OnInit {
  user: UserRetorno = new UserRetorno();
  listaUsuarios: UserRetorno[];
  listaRepositorios: Repositorio[];
  listaRepositoriosEstrela: Repositorio[];
  nome = environment.nome;

  constructor(
    private router: Router,
    private authService: AuthService,
    private repositorioService: RepositorioService
  ) {}

  ngOnInit() {
    /* this.authService.exibir(this.nome) */
    console.log(this.nome);
    this.pesquisarUsuarioRespositorio();
    /* console.log(this.listaUsuarios) */
  }

  pesquisarUsuarioRespositorio() {
    console.log(this.nome);

    this.authService.exibirUsuario(this.nome).subscribe((resp) => {
      this.user = resp;
      console.log(this.user);

      this.repositorioService
        .pesquisarRepositorio(this.nome)
        .subscribe((resp: Repositorio[]) => {
          this.listaRepositorios = resp;
          console.log(this.listaRepositorios);

          this.repositorioService.pesquisarRepositorioEstrela(this.nome).subscribe((resp: Repositorio[]) => {
            this.listaRepositoriosEstrela = resp;
            console.log(this.listaRepositoriosEstrela);
          })
        });
    });
  }
}
