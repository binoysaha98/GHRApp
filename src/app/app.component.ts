import { Component , OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(){
	  
  }
  
  ngOnInit(){
	  
	  
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  $('#login,#update,#register,#about,#profilename,#dashboard').click(function(e)
{
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});


	  
  }
  
}
