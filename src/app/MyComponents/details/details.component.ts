import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  // @Input() id: number=0;
  private url: string = `https://api.jikan.moe/v4/anime/`;
  details: any;
  genreDetails: any;
  constructor(private shareData: DataShareService, private http: HttpClient){}
  ngOnInit(): void {
   console.log(this.shareData.mal_id);
   this.fetchData();   
   
  }
  fetchData(){
    
    fetch(`${this.url}${this.shareData.mal_id}`).then((Response) => {
      Response.json().then((Result) => {
        this.details = Result.data;
        console.log(this.details);
      });
    });
    this.genreDetails = this.details.genres;
    console.log(this,this.genreDetails);
    // this.http.get(`${this.url}${this.shareData.mal_id}`).subscribe((data) => {
    //   this.details = data;
    //   console.log(this.details);
    // });
    
  }
}
