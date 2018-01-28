import {Component, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserAlbumsService} from "../services/user-albums.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'upload-photos',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})

export class UploadPhotoComponent implements OnInit {

  private token: string = '0a1e6ed259335e9cb535b9a11f698062aff54079a71c890f999206798d2f3a27a9f4a6730f853c47e00a0';
  albums: any;

  temp_result: any;
  result: any;

  temp_image:any;
  image: any;



  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private userAlbum: UserAlbumsService) {}

  @ViewChild("uploadImage") fileInput;

  addFile(){
    let fi = this.fileInput.nativeElement;
    if (fi.files) {
      let fileToUpload = fi.files[0];
      this.userAlbum
        .upload(fileToUpload)
        .subscribe(res => {
          this.temp_image = res;
          console.log(res);
          this.http.get(`https://api.vk.com/method/photos.save?server=${this.temp_image.server}&photos_list=${this.temp_image.photos_list}&album_id=${this.temp_image.aid}&hash=${this.temp_image.hash}&v=5.52&access_token=${this.token}`)
            .subscribe(data => {
              this.image = data;
              console.log(this.image);
            })
        });
    }
  }

  ngOnInit(){
    this.userAlbum.getAlbums()
      .subscribe((data) => {
        this.albums = data.response.items;
        console.log(this.albums);
      });

    this.userAlbum.getUrl()
      .subscribe((data) => {
        this.temp_result = data;
        this.result = this.temp_result.response;
        console.log(this.result);
      });
  }
}
