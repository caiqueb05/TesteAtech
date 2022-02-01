import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  user: User = new User();
  usuario: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  pesquisarUsuario() {
    this.authService.exibir(this.usuario).subscribe((resp: User) => {
      this.user = resp;
    });
  }
}
