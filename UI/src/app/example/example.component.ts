import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
declare var $:any;
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $('#msg').append("asd");
  }

}
