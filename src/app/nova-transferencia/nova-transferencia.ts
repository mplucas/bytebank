import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    this.service
      .adicionar({ valor: this.valor, destino: this.destino })
      .subscribe(
        () => {
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        (error) => console.log(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
