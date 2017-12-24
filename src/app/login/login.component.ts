import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post:any; 
  titleAlert:string = 'This field is required';
  
  constructor(private fb: FormBuilder,private router : Router,private dataService : DataService) {
	
	this.rForm = fb.group({
      'text' : [null],
      'pass' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(500)])]
    });
	
  }
	ngOnInit() {
		
  }
  
   login(post) {
	   
	   var user = {
		   email : post.text,
		   pass : post.pass,
	  };
	   
		this.dataService.authenticateUser(user).subscribe(result => {
			if(result.result == 'success'){
				localStorage.setItem('token',result.token);
				this.router.navigate(['dashboard']);
			}
			else{
				alert(result.message);
			}
		});
		
  }

}
