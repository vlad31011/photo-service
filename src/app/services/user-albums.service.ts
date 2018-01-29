import {Injectable} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Injectable()

export class UserAlbumsService {

  pageID: string = '93968091';
  appID: string = '6320917';
  getToken: string = 'https://oauth.vk.com/authorize?client_id=6320917&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=photos&response_type=token&v=5.52';


  private token: string = '3b3724cf8a68b478a55bc544bf2028c969dd01549e5836a3c5fad68f66472beb9856f82820dc809e0d054';
  private albumCovers: string = `https://api.vk.com/method/photos.getAlbums?need_covers=1?v=5.52&access_token=${this.token}`;
  album_id: number = 250811889;

  private uploadImage: string = `https://api.vk.com/method/photos.getUploadServer?album_id=${this.album_id}&v=5.52&access_token=${this.token}`;

  toUpload: string = 'https://pu.vk.com/c831109/upload.php?act=do_add&mid=93968091&aid=250811889&gid=0&hash=564f9a003a1debe22b533687c8f347a3&rhash=267767afefa0918df5cd9c2cf190f232&swfupload=1&api=1';
  album_method: string = `https://api.vk.com/method/photos.getAlbums?owner_id=93968091&v=5.52&access_token=${this.token}`;
  userInfo: string = `https://api.vk.com/method/users.get?user_ids=93968091&name_case=nom&v=5.52&access_token=${this.token}`;
  token_temp: string;
  folder:any;


  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

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

  getUrl(): Observable<any> {
      return this.http.get(this.uploadImage);
  }

  /*upload(fileToUpload: any, folderToUpload: any) {
    let input = new FormData();

    input.append("file", fileToUpload);
    input.append("folder", folderToUpload);

    return this.http
      .post(`https://pu.vk.com/c831109/upload.php?act=do_add&mid=93968091&aid=${}&gid=0&hash=564f9a003a1debe22b533687c8f347a3&rhash=267767afefa0918df5cd9c2cf190f232&swfupload=1&api=1`, input);
  }*/
}
