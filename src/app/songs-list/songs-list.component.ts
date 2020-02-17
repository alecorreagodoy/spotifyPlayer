import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})



export class SongsListComponent  {
  
  newUrl: string = ""
 
  debeMostrarse: boolean = true;
  toggle(){
 
    this.debeMostrarse = !this.debeMostrarse;
    }

  listaCanciones: object[] = [
    {"titulo": "Somewhere", "artista":"Keane", "URL":"/0", "cover":"/assets/img/keane.jpg"},
    {"titulo": "Nada sirve", "artista":"No te va gustar", "URL":"/1", "cover":"/assets/img/ntvg.jpg"},
    {"titulo": "Human", "artista":"The Killers", "URL":"/2", "cover":"/assets/img/the_killers.jpg"}
  ]
 
  

  constructor( public _route : ActivatedRoute) { 
   
    
  }

  

}
