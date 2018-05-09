import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ChatService } from './../../services/chat.service';
import { Usuari } from '../../models/usuaris.model';
import { Missatge } from '../../models/missatges.model';
declare var $:any;

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.scss'],
  providers: [ChatService]
})
export class ConversaComponent implements OnInit {
;
  private _chat;
  sender: Usuari;
  receiver: Usuari;
  yo: Usuari;
  otro: Usuari;
  soyDestinatari = true;
  missatges: Array<Missatge>;
  user;

  constructor(private chatService: ChatService) { }

  get chat() {
    return this._chat;
  }
  
  @Input()
  set chat(chat: any) {
    this._chat = chat;
    this.chatService.getChat(this.chat.remitent.id, this.chat.destinatari.id).subscribe(
  		response => {
  			this.missatges = response.result;
  			console.log(this.yo);
  			console.log(this.missatges);
  		},
  		error => {
  			console.log(<any>error);
  		}
	);
  }

  ngOnInit() {
  	this.user = JSON.parse(localStorage.getItem("usuari"));
  	$("#missatge").on('keyup', (e) => {

  		if (e.keyCode == 13) {
  			console.log(this.yo.id);
  			console.log(this.otro.id);
  			console.log($("#missatge").val());
  			this.chatService.sendMessage(this.yo.id, this.otro.id, $("#missatge").val()).subscribe(
  				response => {
  					console.log(response);
  				},
  				error => {
  					console.log(<any>error);
  				}
			);
  		}
  	});
  }

  ngDoCheck(){
  	if (this.chat.destinatari.id == this.user.id){
  		this.yo = this.chat.destinatari;
  		this.otro = this.chat.remitent;
  		this.soyDestinatari = true;
  	}else{
  		this.yo = this.chat.remitent;
  		this.otro = this.chat.destinatari;
  		this.soyDestinatari = false;
  	}
  }


}
