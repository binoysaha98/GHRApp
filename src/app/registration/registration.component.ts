import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data-service.service';
declare var $ : any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	user : any;
	constructor(private router : Router,private dataService : DataService) {
	}
  
  ngOnInit(){
	  $('#email').hide();
	  $(document).on('change','select',function(){
		if($(this).val() == 'none'){
			$('#email').show();
		}
		else{
			$('#email').hide();
		}
	  });
  }
	register(mode : string){
		if(mode ==  'email'){
			this.registerEmail();
		}else{
			this.registerPhone();
		}
	}
	registerEmail(){
		if($("input[name='username']").val() == ''){
			
		}else{
			
		}
	}
	registerPhone(){
		if($("input[name='username']").val() == ''){
			
		}else{
			
		}
	}
}
