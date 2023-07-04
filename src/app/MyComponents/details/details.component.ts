import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private url: string = `https://api.jikan.moe/v4/anime/`;
  constructor(private sharedService: SharedService){}
  private details: object = {};
  ngOnInit(){
    const id = this.sharedService.id;
    console.log(id);
    this.fetchData();
    
  }
  fetchData(){
    console.log(this.id);
    fetch(`${this.url}${this.id}`).then((Response) => {
      Response.json().then((Result) => {
        this.details = Result.data;
        // if(this.searchTerm!=='')
        {
          console.log(this.details);
        }
      });
    });
  }
  
  @Input() id:number;
}
