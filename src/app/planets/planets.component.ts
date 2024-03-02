import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { apis } from 'src/global';
import { PAGE_SIZE } from 'src/constants';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {
  private apiService: ApiService = inject(ApiService);
  public results : any = null;
  public count : number = 0;
  public pageSize : number = PAGE_SIZE;
  

  ngAfterViewInit():void{
    let params = new Map<string, any>();
    params.set('format','json');
    this.apiService.executeGet({
      url : apis.planets
    }).subscribe(
      {
        next: (res)=> {
          this.count = res.count;
          this.results = res;
        }
      }
    )
  }

  private getDirect(url : string){
    this.apiService.getDirect(url).subscribe({
      next: (res)=> {
        this.results = res;
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
}
