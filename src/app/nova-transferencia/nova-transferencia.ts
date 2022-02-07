import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  transferir() {
    this.service
      .adicionar({ valor: this.valor, destino: this.destino })
      .subscribe(
        () => {
          this.limparCampos();
        },
        (error) => console.log(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
