import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  trendingAnime: any;
  allAnime: any;
  searchTerm: string = '';
  private url: string = `https://api.jikan.moe/v4/anime?q=`;
  
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getPopularAnime();
    this.searchAnime();
  }
  searchAnime(){
    fetch(`${this.url}${this.searchTerm}`).then((Response) => {
      Response.json().then((Result) => {
        this.allAnime = Result.data;
        if(this.searchTerm!==''){
          console.log(this.allAnime);
        }
      });
    });
  }
  getPopularAnime(){
    fetch(`${this.url}`).then((Response) => {
      // console.log(Response);
      Response.json().then((Res) => {
        // const res = Res.data;
        this.trendingAnime = Res.data;
        this.trendingAnime.splice(0,2);
        this.trendingAnime.sort((a: any,b: any)=>a.rank-b.rank);
        console.log(this.trendingAnime);
        // res.map((item: any, index: number) => {
        
        // });
      });
    });

  //   this.http
  //     .get(this.url)
  //     .subscribe((anime) => {
  //       this.trendingAnime = anime; 
  // })
  
  }
}
