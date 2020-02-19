import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private _AppService: AppService, private route: ActivatedRoute, ) { }
  public artistData = [];
  public atristName: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      let _id = params['name'];
      this.atristName = _id
      this._AppService.searchResult(_id).subscribe((result) => {
        if (result) {
          this.artistData = result.results.albummatches.album
          console.log("result", result.results.albummatches.album)

        } else {
          console.log("error..........!")
        }
      });
    });
  }
}
