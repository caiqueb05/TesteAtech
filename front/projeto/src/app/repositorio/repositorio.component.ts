import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserRetorno } from '../model/UserRetorno';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  user: UserRetorno = new UserRetorno();
  listaUsuarios: UserRetorno[]
  nome = environment.nome

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){
    /* this.authService.exibir(this.nome) */
    console.log(this.nome)
    this.pesquisarUsuario()
    /* console.log(this.listaUsuarios) */

  }

  pesquisarUsuario() {
    console.log(this.nome)

    this.authService.exibir(this.nome).subscribe(resp => {
      this.user = resp;
      console.log(this.user)

    });
  }

}
