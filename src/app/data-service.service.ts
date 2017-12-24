import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  addUserEmail(user){
	  var headers = new Headers();
	  headers.append("content-type","application/json");
	return this._http.post("https://secure-sea-22568.herokuapp.com/createUserEmail",user,{headers:headers}).map(res => res.json());
  }
  
  addUserPhone(user){
	  var headers = new Headers();
	  headers.append("content-type","application/json");
	return this._http.post("https://secure-sea-22568.herokuapp.com/createUserPhone",user,{headers:headers}).map(res => res.json());
  }
  
  authenticateUser(user)
  {
	  var headers = new Headers();
	  headers.append("content-type","application/json");
	return this._http.post("https://secure-sea-22568.herokuapp.com/authenticateUser",user,{headers:headers}).map(res => res.json());
  }
  
  isLoggedIn(){
	  var headers = new Headers();
	  headers.append("content-type","application/json");
	  var token = localStorage.getItem('token');
	  var data = {
		  token : token
	  };
	  if(!token)
	  {
		 return false; 
	  }
	  else{
		return this._http.post("https://secure-sea-22568.herokuapp.com/isLoggedIn",data,{headers:headers}).map(res => res.json().result);
	  }
	}
	
	isDoctor(){
	  var headers = new Headers();
	  headers.append("content-type","application/json");
	  var token = localStorage.getItem('token');
	  var data = {
		  token : token
	  };
	  if(!token)
	  {
		 return false; 
	  }
	  else{
		return this._http.post("https://secure-sea-22568.herokuapp.com/isDoctor",data,{headers:headers}).map(res => res.json().doctor);
	  }
	}
	
	getSpecifiedUser(number : string){
	  var headers = new Headers();
	  headers.append("content-type","application/json");
	  var data = {
		  number : number
	  };
	  return this._http.post("https://secure-sea-22568.herokuapp.com/getSpecifiedUser",data,{headers:headers}).map(res => res.json());
	}

	getUser(){
	  var headers = new Headers();
	  headers.append("content-type","application/json");
	  var token = localStorage.getItem('token');
	  var data = {
		  token : token
	  };
	  return this._http.post("https://secure-sea-22568.herokuapp.com/isLoggedIn",data,{headers:headers}).map(res => res.json());
	  
	}
	

	sendSMS(email){
		var headers = new Headers();
	    headers.append("content-type","application/x-www-form-urlencoded");
		return this._http.post("http://ghr1.epizy.com/SMS/sendSMS.php",email,{headers:headers}).map(res => res.json());
	}
	
	sendMail(email){
		var headers = new Headers();
	    headers.append("content-type","application/json");
		return this._http.post("https://secure-sea-22568.herokuapp.com/sendMail",email,{headers:headers}).map(res => res.json());
	
	}
	
	verifyDoctor(user){
		var headers = new Headers();
	    headers.append("content-type","application/json");
		return this._http.post("https://secure-sea-22568.herokuapp.com/verifyDoctor",user,{headers:headers}).map(res => res.json());
	
	}
	
	sendNotification(){
		var headers = new Headers();
	    headers.append("content-type","application/json");
		return this._http.post("http://ghr1.epizy.com/SMS/send_message.php",{},{headers:headers}).map(res => res.json());
	}
	
	sendNoti(body){
		var headers = new Headers();
	    headers.append("content-type","application/json");
		return this._http.post("https://secure-sea-22568.herokuapp.com/sendNoti",body,{headers:headers}).map(res => res.json());
	}
	
	subscribeTopic(body){
		var headers = new Headers();
	    headers.append("content-type","application/json");
		return this._http.post("https://secure-sea-22568.herokuapp.com/subscribeToTopic",body,{headers:headers}).map(res => res.json());
	}
	
	setTimerChatRoom(body){
		var headers = new Headers();
	    headers.append("content-type","application/json");
		return this._http.post("https://secure-sea-22568.herokuapp.com/setTimerChatRoom",body,{headers:headers}).map(res => res.json());
	}
	getCurrentTime(){
		var headers = new Headers();
	    headers.append("content-type","application/json");
		return this._http.post("https://secure-sea-22568.herokuapp.com/getCurrentTime",{},{headers:headers}).map(res => res.json());
	
	}
}
