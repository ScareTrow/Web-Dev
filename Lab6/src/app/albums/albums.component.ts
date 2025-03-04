import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumsService } from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  constructor(private albumsService: AlbumsService){
  }
  albums$!:Observable<{id:number,title:string}[]>;
  ngOnInit():void {
    this.albums$ = this.albumsService.getAlbums();
  }
  delete(album: {id: number, title: string}): void {
    this.albums$ = this.albums$.pipe(
      map(albums => albums.filter(a => a.id !== album.id))
    );
  }
}