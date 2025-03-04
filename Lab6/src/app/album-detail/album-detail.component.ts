import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumsService } from "../albums.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService) {}
  albums$: Observable<{ id: number; title: string; }[]> | undefined;
  album: { id: number; title: string } | undefined;
  editedTitle: string = '';

  ngOnInit(): void {
    this.albums$ = this.albumService.getAlbums();
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.albums$.subscribe((albums) => {
      this.album = albums.find((album) => album.id === albumIdFromRoute);
      // @ts-ignore
      this.editedTitle = this.album.title;
    });
  }
  saveAlbum(newTitle: string) {
    if (this.album) {
      this.album.title = newTitle;
      this.albumService.updateAlbum({ id: this.album.id, title: this.editedTitle }).subscribe(() => {
        alert('Album updated successfully');
      });
    }
  }
}