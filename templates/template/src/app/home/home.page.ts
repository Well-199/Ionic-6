import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  mensagem : string = "Ola Mundo"

  constructor() {}

  mudarMensagemAoClicar(){
    this.mensagem = 'Ola Brasil'

    setTimeout(() => {
      this.mensagem = 'Ola Rio de Janeiro'
    }, 1000)
  }

}
