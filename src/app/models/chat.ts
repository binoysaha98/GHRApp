export interface Chat {
	id?: string;
	username : string;
	message : string;
}

export interface Location {
	id?: string;
	accept?: string;
	latitude : number;
	longitude : number;
	victim? : string;
	you? : string;
}
