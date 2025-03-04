import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    AboutComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'albums/:id', component: AlbumDetailComponent},
      {path: 'album-detail', component: AlbumDetailComponent},
      {path: 'albums/:id/photos', component: AlbumPhotosComponent},
    ]),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
