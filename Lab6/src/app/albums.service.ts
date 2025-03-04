import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http: HttpClient,
  ) {}
  private albumsUrl = '/assets/albums.json';

  getAlbums(): Observable<{ id: number, title: string }[]> {
    return this.http.get<{id: number, title: string}[]>(this.albumsUrl);
  }
  getPhotos(): Observable<{ albumId: number, id: number, title: string, url: string, thumbnailUrl: string }[]> {
    return this.http.get<{albumId: number, id: number, title: string, url: string, thumbnailUrl: string }[]>('/assets/photos.json');
  }
  updateAlbum(album: { id: number, title: string }): Observable<{}> {
    const url = `${this.albumsUrl}/${album.id}`;
    return this.http.put(url, album);
  }
}