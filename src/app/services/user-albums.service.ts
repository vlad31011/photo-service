import {Injectable} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Injectable()

export class UserAlbumsService {

  pageID: string = '93968091';
  appID: string = '6320917';
  getToken: string = 'https://oauth.vk.com/authorize?client_id=6320917&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=photos&response_type=token&v=5.52';

  private token: string = 'c68fa9297f7620075c481c5487e8bda7d2bfbc4440dcd51815e483ead3f1824cc4d2aebf830e3168cdba3';
  private albumCovers: string = `https://api.vk.com/method/photos.getAlbums?need_covers=1?v=5.52&access_token=${this.token}`;
  album_id: number;

  album_method: string = `https://api.vk.com/method/photos.getAlbums?owner_id=93968091&v=5.52&access_token=${this.token}`;
  userInfo: string = `https://api.vk.com/method/users.get?user_ids=93968091&name_case=nom&v=5.52&access_token=${this.token}`;
  token_temp: string;


  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getTempToken(): Observable<any> {
    return this.route.url.map(() => {
      this.token_temp = this.route.snapshot.params.access_token;
    });
  }

  getUserInfo(): Observable<any> {
    return this.http.get(this.userInfo);
  }

  getAlbums(): Observable<any> {
    return this.http.get(this.album_method);
  }

  getService(): Observable<any> {
    return this.http.get(this.albumCovers);
  }
}
