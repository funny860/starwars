import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { apis } from 'src/global';
import { TITLE } from 'src/constants';
import { ActivatedRoute, Router } from '@angular/router';
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
      title : 'Starships',
      route : '/starships'
    },
    {
      isActive : false,
      title : 'Films',
      route : '/films'
    }
  ];
  public selectedRoute : string = '';
  constructor(
    private router : Router,
    private route : ActivatedRoute,
  ){
    
  }

  public showInfo(link : NavLink) : void{
    this.selectedRoute = link.title;
    this.navigation = (this.navigation).map(each => {
      if(each.route == link.route){
        each.isActive = true; 
      }
      else{
        each.isActive = false;
      }
      return each;
    })
    this.router.navigate([link.route]);
  }
  public checkedChange(change : boolean):void{
    this.opened = change;
  }
  ngOnInit(){
  }
}
