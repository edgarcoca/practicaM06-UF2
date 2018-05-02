import { Usuari } from './usuaris.model';

export class Missatge {
  destinatari: Usuari;
  remitent: Usuari;
  missatge: string;
  data: Date;
  envio: boolean;

  constructor(destinatari, remitent, missatge, data, envio){
  	this.destinatari = destinatari;
  	this.remitent = remitent;
  	this.missatge = missatge;
  	this.data = data;
    this.envio = envio;
  }
}