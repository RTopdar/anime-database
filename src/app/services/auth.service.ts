import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  ngOnInit(): void {
    if (localStorage.getItem('sessionToken')) {
      localStorage.removeItem('sessionToken');
    }
  }
  constructor(private router: Router) { }
  login(username: string, password: string){
      if(username === 'james' && password === '123'){
        return 200;
      }
      else{
        return 403;
      }
  }
  // private sessionToken: any;
  logout(){
    localStorage.removeItem('sessionToken');
    this.router.navigate(['login']);

  }
}
