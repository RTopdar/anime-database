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
  private details: object = {};
  constructor(private shareData: DataShareService, private http: HttpClient){}
  ngOnInit(): void {
   console.log(this.shareData.mal_id);
   this.fetchData();   
  }
  fetchData(){
    // console.log(`This is the data we are fetching from the home component ${this.shareData.mal_id}`);
    this.http.get(`${this.url}${this.shareData.mal_id}`).subscribe(res=>{
      this.details = res;
      console.log(res);
    });
  }
}
