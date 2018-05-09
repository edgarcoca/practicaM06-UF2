import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChatService } from './../../services/chat.service';
import { Missatge } from '../../models/missatges.model';
import { Usuari } from '../../models/usuaris.model';
declare var $:any;

@Component({
  selector: 'app-converses',
  templateUrl: './converses.component.html',
  styleUrls: ['./converses.component.scss'],
  providers: [ChatService]
})
export class ConversesComponent implements OnInit {
  user;
  sender: Usuari;
  receiver: Usuari;
  conversa: Missatge;
  converses: Array<Missatge>;
  @Output() sendProperty = new EventEmitter();
  constructor(private chatService: ChatService) { 
  }

  ngOnInit() {
  	let usuaris = [];
  	this.chatService.getAllUsers().subscribe(
  		response => {
  			usuaris = response.result;
  			this.user = JSON.parse(localStorage.getItem("usuari"));
  			this.chatService.getAllResumeChats(this.user.id).subscribe(
  				response => {
  					console.log(response);
  					var sender;
  					var receiver;
  					var message;
  					var date;
  					var senderNom;
  					var receiverNom;
  					var envio;
  					response = response.result;
  					this.converses = [];
  					for (var i in response) { 
  						sender = response[i].sender;
  						receiver = response[i].receiver;
  						message = response[i].message;
  						date = response[i].date;
  						envio = true;
  						if(sender == this.user.id){
  							senderNom = this.user.name;
  							for (var j in usuaris){
  								if(usuaris[j].id == receiver){
  									receiverNom = usuaris[j].name;
  								}
  							}
  						}else{
  							envio = false;
  							receiverNom = this.user.name;
  							for (var j in usuaris){
  								if(usuaris[j].id == sender){
  									senderNom = usuaris[j].name;
  								}
  							}
  						}
  						this.sender = new Usuari(sender, senderNom);
  						this.receiver = new Usuari(receiver, receiverNom);
  						this.conversa = new Missatge(this.receiver, this.sender, message, date, envio);  						
  						this.converses.push(this.conversa);
  					}
  					console.log(this.converses);
  				},
  				error => {
  					console.log(<any>error);
  				}
  				);
  		},
  		error => {
  			console.log(<any>error);
  		}
	);  	  	
  }

  send(event){
    //console.log(event);
    this.sendProperty.emit({conversa: event});
  }

}
