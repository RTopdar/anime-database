import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  trendingAnime: any;
  allAnime: any;
  searchTerm: string | number = '';
  mal_id: number;
  private url: string = `https://api.jikan.moe/v4/anime?q=`;
  e: Event | any;
  
  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {

  }
  ngOnInit(): void {
    this.getPopularAnime();
    this.searchAnime(this.e);
    this.toDetails();
  }
  getMalId(mal_id: number){
    this.mal_id = mal_id;
    console.log(this.mal_id);
    this.sharedService.setId(this.mal_id);
    this.toDetails();
  }
  toDetails(){
   
    this.router.navigate(['details']);
  }




  searchAnime(event: any){
    event.preventDefault();
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







  getPopularAnime(){
    fetch(`${this.url}`).then((Response) => {
     
      Response.json().then((Res) => {
        
        this.trendingAnime = Res.data;
        this.trendingAnime.splice(0,3);
        this.trendingAnime.sort((a: any,b: any)=>a.rank-b.rank);
        console.log(this.trendingAnime);
        
      });
    });

  
  
  }
  
}
