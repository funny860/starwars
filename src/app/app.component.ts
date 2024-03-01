import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { apis } from 'src/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'starwars';
  constructor(
    private apiService: ApiService
  ){

  }

  ngOnInit(){
    this.apiService.executeGet({
      url : apis.planets
    }).subscribe(
      {
        next : (res)=> {
          console.log("Api Response : ", res);
        },
        error : (err) => {
          console.log("Api Error : ", err);
        }
      }
    )
  }
}
