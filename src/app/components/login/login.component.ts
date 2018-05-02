import { Component, OnInit } from '@angular/core';
import { ChatService } from './../../services/chat.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ChatService]
})
export class LoginComponent implements OnInit {
  nombre: string;

  constructor(private chatService: ChatService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  	let router = this.router;
  	let nombre = this.nombre;
  	let chatService = this.chatService;
  	let usuaris = [];
  	let usuari;
  	let usuariID;
  	this.chatService.getAllUsers().subscribe(
      response => {
        usuaris = response.result;
      },
      error => {
        console.log(<any>error);
      }
    );
  	$('#nomButton').click(function(e){
  		e.preventDefault();
  		nombre = $("#nom").val();
  		chatService.getId(nombre).subscribe(
  			response => {
  				usuariID =  response.result;
  				if(response.state == "OK"){
  					$("#nom").removeClass("incorrecto");
  					$("#nom").addClass("correcto");
  					for(var i = 0;  i < usuaris.length; i++ ){
  						if(usuaris[i].id == usuariID ){
  							usuari = usuaris[i];
  						}
  					}
  					localStorage.setItem("usuari", JSON.stringify(usuari));
  					router.navigate(['/chat']);
  				}else{
  					$("#nom").removeClass("correcto");
  					$("#nom").addClass("incorrecto");
  				}
  			},
  			error => {
  				
  			}
		);
  	});
  }

}
