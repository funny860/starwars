import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PAGE_SIZE } from 'src/constants';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { apis } from 'src/global';
import { LoaderComponent } from '../commons/loader/loader.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  @ViewChild(LoaderComponent)
  public loader : LoaderComponent = new LoaderComponent();

  private apiService: ApiService = inject(ApiService);
  private router : Router = inject(Router);
  private route : ActivatedRoute = inject(ActivatedRoute);
  public results : any = null;
  public count : number = 0;
  public pageSize : number = PAGE_SIZE;
  

  ngAfterViewInit():void{
    this.loader.startLoading();
    let params = new Map<string, any>();
    this.apiService.executeGet({
      url : apis.people
    }).subscribe(
      {
        next: (res)=> {
          this.count = res.count;
          this.results = res;
          this.loader.stopLoading();
        },
        error : (err)=>{
          this.loader.stopLoading(err);
        }
      }
    )
  }

  private getDirect(url : string){
    this.loader.startLoading();
    this.apiService.getDirect(url).subscribe({
      next: (res)=> {
        this.results = res;
        this.loader.stopLoading();
      },
      error : (err)=>{
        this.loader.stopLoading(err);
      }
    })
  }

  public onPageChange(event : PageEvent):void{
    if((event?.previousPageIndex || event?.previousPageIndex==0) && event.previousPageIndex < event.pageIndex){
      if(this.results.next){
        this.getDirect(this.results.next);
      }
    }
    else if(event?.previousPageIndex && event.previousPageIndex > event.pageIndex){
      if(this.results.previous){
        this.getDirect(this.results.previous);
      }
    }
  }
  
  public viewDetails(item :any):void{
    this.router.navigate(
      ['./details'], 
      {
        relativeTo : this.route,
        queryParams : {url : item.url}
      });
  }
}
