import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.getTrendingAnime();
    
  }
  allAnime: any;
  trendingAnime: any;
  private url: string = `https://api.jikan.moe/v4/anime?q=`;
  private malUrl: string = `https://myanimelist.net/anime/`;
  searchTerm: string = "";
  searchAnime(e: Event){
    e.preventDefault();
    fetch(`${this.url}${this.searchTerm}`).then((Response) => {
            Response.json().then((Result) => {
              this.allAnime = Result.data;
              // if(this.searchTerm!=='')
              {
                console.log(this.allAnime);
              }
            });
          });

  }

  getTrendingAnime(){
    fetch(`${this.url}`).then((Response) => {
      Response.json().then((Result) => {
        this.trendingAnime = Result.data;
        
        
          console.log(this.trendingAnime);
        
      });
    });
  }
  
  redirect(id:number){
    window.open(`${this.malUrl}${id}`,"_blank");

  }
}

