import { Usuari } from './usuaris.model';

export class Missatge {
  destinatari: Usuari;
  remitent: Usuari;
  missatge: string;
  data: Date;

  constructor(destinatari, remitent, missatge, data){
  	this.destinatari = destinatari;
  	this.remitent = remitent;
  	this.missatge = missatge;
  	this.data = data;
  }
}