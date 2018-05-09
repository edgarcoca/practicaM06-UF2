import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chat;
  constructor() {

  }

  ngOnInit() {
  	
  }

  showConversa(event):void{
  	this.chat= event.conversa;
    console.log(this.chat);
  }

}
