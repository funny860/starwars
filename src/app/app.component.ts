import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { apis } from 'src/global';
import { TITLE } from 'src/constants';
import { Router } from '@angular/router';
import { NavLink } from 'src/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = TITLE;
  public events: string[] = [];
  public opened: boolean = true;
  public navigation : Array<NavLink> = [
    {
      isActive : false,
      title : 'Planets',
      route : '/planets'
    },
    {
      isActive : false,
      title : 'People',
      route : '/people'
    },
    {
      isActive : false,
      title : 'starships',
      route : '/starships'
    }
  ]
  constructor(
    private router : Router,
  ){

  }
  public showInfo(link : NavLink) : void{

    this.router.navigate([link.route]);
  }
  public checkedChange(change : boolean):void{
    this.opened = change;
  }
  ngOnInit(){
  }
}
