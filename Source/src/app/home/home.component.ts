import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public musicData=[];
  public image :boolean
  constructor(private _AppService: AppService) { }
  ngOnInit() {
   this.image = true;
  }
  searchMusic(date) {
    this._AppService.searchResult(date).subscribe((result) => {
        if (result) {
          this.musicData=result.results.albummatches.album
            this.image = false
            //console.log("result",result.results.albummatches.album)

        } else {
          console.log("error..........!")
                }
    });
}

}
