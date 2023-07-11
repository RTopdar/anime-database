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
  private url: string = `https://api.jikan.moe/v4/anime?q=`
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
















//   trendingAnime: any;
//   private url: string = `https://api.jikan.moe/v4/anime?q=`;
// <<<<<<< HEAD
//   e: Event | any;
// =======
// >>>>>>> parent of 67fcb65 (Added search functionality)
//   constructor(private http: HttpClient) {

//   }
//   ngOnInit(): void {
//     this.getPopularAnime();
// <<<<<<< HEAD
//     this.searchAnime(this.e);
//   }
//   searchAnime(event: any){
//     event.preventDefault();
//     fetch(`${this.url}${this.searchTerm}`).then((Response) => {
//       Response.json().then((Result) => {
//         this.allAnime = Result.data;
//         // if(this.searchTerm!=='')
//         {
//           console.log(this.allAnime);
//         }
//       });
//     });
// =======
// >>>>>>> parent of 67fcb65 (Added search functionality)
//   }
//   getPopularAnime(){
//     fetch(`${this.url}`).then((Response) => {
//       // console.log(Response);
//       Response.json().then((Res) => {
//         // const res = Res.data;
//         this.trendingAnime = Res.data;
//         this.trendingAnime.splice(0,3);
//         this.trendingAnime.sort((a: any,b: any)=>a.rank-b.rank);
//         console.log(this.trendingAnime);
//         // res.map((item: any, index: number) => {
        
//         // });
//       });
//     });

  //   this.http
  //     .get(this.url)
  //     .subscribe((anime) => {
  //       this.trendingAnime = anime; 
  // })
}
