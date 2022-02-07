import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  constructor(private httpClient: HttpClient) {}
  private listaTransferencia: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
