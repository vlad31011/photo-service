import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserAlbumsService} from "../services/user-albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'photo-information',
  templateUrl: './photo-information.component.html',
  styleUrls: ['./photo-information.component.css']
})

export class PhotoInformationComponent implements OnInit{
  private token: string = '3b3724cf8a68b478a55bc544bf2028c969dd01549e5836a3c5fad68f66472beb9856f82820dc809e0d054';
  owner_id: string;
  photo_id: string;
  temp_info: any;
  info: any;

  constructor(private userAlbum: UserAlbumsService, private http: HttpClient, route: ActivatedRoute) {
    route.url.subscribe(() => {
      this.owner_id = route.snapshot.params.oid;
      this.photo_id = route.snapshot.params.pid;

      console.log(this.owner_id);
      console.log(this.photo_id);
    });
  }

  ngOnInit() {
    this.http.get(`https://api.vk.com/method/photos.getById?photos=${this.owner_id}_${this.photo_id}&extended=1&photo_sizes=1&v=5.52&access_token=${this.token}`)
      .subscribe((result) => {
        this.temp_info = result;
        this.info = this.temp_info.response;
        console.log(this.info)
      });
  }
}
