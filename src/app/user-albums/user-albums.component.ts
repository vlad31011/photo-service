import { Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {UserAlbumsService} from "../services/user-albums.service"
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})

export class UserAlbumsComponent implements OnInit {

  token: string = '0a1e6ed259335e9cb535b9a11f698062aff54079a71c890f999206798d2f3a27a9f4a6730f853c47e00a0';
  albums: any;
  temp_albums:any;
  user_info: any;

  constructor(private http: HttpClient, private userAlbum: UserAlbumsService) {}

  ngOnInit() {
    this.http.get(`https://api.vk.com/method/photos.getAlbums?need_covers=1?v=5.52&access_token=${this.token}`)
      .subscribe((data) => {
        this.temp_albums = data;
        this.albums = this.temp_albums.response;
        console.log(this.albums);
      });
    this.userAlbum.getUserInfo()
      .subscribe((result) => {
        this.user_info = result.response;
        console.log(this.user_info);
      })
  }
}




  /*ngAfterViewInit(){
    this.t1.nativeElement.style.width = '500px';
    this.t1.nativeElement.style.height = '100px';
    this.t1.nativeElement.style.color = '#000000';
  }*/

