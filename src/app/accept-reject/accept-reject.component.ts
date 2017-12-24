import { Component, OnInit } from '@angular/core';
import { Location } from '../models/chat';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-accept-reject',
  templateUrl: './accept-reject.component.html',
  styleUrls: ['./accept-reject.component.css']
})
export class AcceptRejectComponent implements OnInit {

  
    victimLabel = {
	color: 'green',
	fontFamily: '',
	fontSize: '18px',
	fontWeight: 'bold',
	text: 'V',
	};
	
	acceptLabel = {
	color: 'yellow',
	fontFamily: '',
	fontSize: '18px',
	fontWeight: 'bold',
	text: 'A',
	};
	
	youLabel = {
	color: 'blue',
	fontFamily: '',
	fontSize: '18px',
	fontWeight: 'bold',
	text: 'U',
	};
	
	loc : Location;
	locations : Location[];
	locCount;
	maptype = 'roadmap';
	
	constructor(private chatService : ChatService) { }
	getLocation(){
			this.chatService.getLocationByid('token2').subscribe((loc : Location) => {
				this.chatService.updateLocation('token2',loc.latitude,loc.longitude);
			}); 
		 }
		 
  ngOnInit() {
	  this.chatService.getLocations().subscribe(locations => {
			this.locations =  locations;
			this.locCount = this.locations.length;
	 });
	  
	 
	 
	 //setInterval(() => {this.getLocation()}, 3000000);
  }

	reply(res : boolean){
		if(res == true){
			this.chatService.insertAccept('token3');
		}
	}
}
