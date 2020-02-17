import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css']
})
export class SongPlayerComponent  {
  indice: string = ""; 

  datosCanciones = [
    {"titulo": "Somewhere", "archivo": "/assets/music/Keane - Somewhere Only We Know (Official Video).mp3", "img":"/assets/img/keane.jpg"},
    {"titulo": "Nada sirve", "archivo": "/assets/music/No Te Va Gustar ft. Jorge Drexler - De Nada Sirve (Acústico) [Otras Canciones 2019].mp3", "img":"/assets/img/ntvg.jpg"},
    {"titulo": "Human", "archivo": "/assets/music/The Killers - Human (Official Music Video).mp3", "img":"/assets/img/the_killers.jpg"}
  ];

  

  constructor( public _route : ActivatedRoute) { 
    this.indice = _route.snapshot.params["songs"];
    
  }

}
