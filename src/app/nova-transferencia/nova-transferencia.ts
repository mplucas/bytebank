import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
    this.limparDados();
  }

  limparDados() {
    this.valor = 0;
    this.destino = 0;
  }
}
