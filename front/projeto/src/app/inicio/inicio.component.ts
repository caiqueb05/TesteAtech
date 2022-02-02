import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserRetorno } from '../model/UserRetorno';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  user: UserRetorno = new UserRetorno();
  listaUsuarios: UserRetorno[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    /* this.pesquisarUsuario("caiqueb05"); */
  }

  pesquisarUsuario(usuario: string) {
    /* console.log(this.user.login) */

    this.authService.exibir(usuario).subscribe((resp: UserRetorno) => {
      this.user = resp;
      /* this.user = new UserRetorno; */
      environment.nome = this.user.login
      console.log(this.user)
      /* console.log(resp) */
      /* this.router.navigate(['/repositorio']); */
      this.router.navigate([`/repositorio/${environment.nome}`]);
    });
  }
}
