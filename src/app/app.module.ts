import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongPlayerComponent } from './song-player/song-player.component';
import { Error404Component } from './error404/error404.component';
import { NavbarComponent } from './navbar/navbar.component'

const RouterConfig: Routes = [
  {"path":"", "component": SongsListComponent},
  {"path":"songs-list", "component": SongsListComponent},
  {"path":"song-player/:songs", "component": SongPlayerComponent},
  {"path":"**", "component":Error404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongPlayerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig,{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
