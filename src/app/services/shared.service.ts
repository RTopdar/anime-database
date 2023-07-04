import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  id: any;
  constructor() { }
  setId(value:any){
    this.id = value;
  }
}
