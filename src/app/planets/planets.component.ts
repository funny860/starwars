import { Component, ViewChild, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { apis } from 'src/global';
import { PAGE_SIZE } from 'src/constants';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderComponent } from '../commons/loader/loader.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {
  private apiService: ApiService = inject(ApiService);
  private router : Router = inject(Router);
  private route : ActivatedRoute = inject(ActivatedRoute);
  public results : any = null;
  public count : number = 0;
  public pageSize : number = PAGE_SIZE;
  
  @ViewChild(LoaderComponent)
  public loader : LoaderComponent = new LoaderComponent();

  ngAfterViewInit():void{
    this.loader.startLoading();
    let params = new Map<string, any>();
    params.set('format','json');
    this.apiService.executeGet({
      url : apis.planets
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
