import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  transferencias:any[] = [];

  title = 'bytebank';

  transferir($event) {
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }
}
