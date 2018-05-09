import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ChatService {
  public url: string;

	constructor(private http: Http) {
		this.url = GLOBAL.url;
	}

	getTest() {
		let headers = new Headers({'Content-Type':'application/json'});
		return this.http.get(this.url,{headers: headers})
		.map(res => res.json());
	}
	getId(name) {
		let headers = new Headers({'Content-Type':'application/json'});
		return this.http.get(this.url+'getId/'+name,{headers: headers})
		.map(res => res.json());
	}
	getAllUsers(){
		let headers = new Headers({'Content-Type':'application/json'});
		return this.http.get(this.url+'getAllUsers',{headers: headers})
		.map(res => res.json());
	}
	getChat(sender, receiver){
		let headers = new Headers({'Content-Type':'application/json'});
		return this.http.get(this.url+'getChat/'+sender+'/'+receiver,{headers: headers})
		.map(res => res.json());
	}
	getAllResumeChats(user){
		let headers = new Headers({'Content-Type':'application/json'});
		return this.http.get(this.url+'getAllResumeChats/'+user,{headers: headers})
		.map(res => res.json());
	}
	sendMessage(sender,receiver,message){
		let params = {sender: sender, receiver: receiver, message: message};
		let headers = new Headers({'Content-Type':'application/json'});
		return this.http.post(this.url+'sendMessage',params,{headers: headers})
		.map(res => res.json());
	}



}
