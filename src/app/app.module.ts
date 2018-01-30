import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from 'ngx-icons';
import { LazyLoadImageModule } from 'ng2-lazyload-image';

import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { UserAlbumsService } from "./services/user-albums.service";
import { AlbumPhotosComponent } from "./album-photos/album-photos.component";
import { UploadPhotoComponent } from "./upload-photo/upload-photo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhotoInformationComponent } from "./photo-information/photo-information.component";
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FilterPipe } from './filter.pipe';




const appRoutes: Routes =[
  { path: 'album', component: UserAlbumsComponent},
  { path: 'album/:id', component: AlbumPhotosComponent},
  { path: 'photo/:oid/:pid', component: PhotoInformationComponent},
  { path: 'upload', component: UploadPhotoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent,
    PhotoInformationComponent,
    UploadPhotoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    Ng2FilterPipeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserAlbumsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
