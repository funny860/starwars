import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderComponent } from 'src/app/commons/loader/loader.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  private route : ActivatedRoute = inject(ActivatedRoute);
  private apiService : ApiService = inject(ApiService);
  public residentData : any = null;
  public vehicles : any = [];
  public films : any = [];
  public starships : any = [];

  @ViewChild(LoaderComponent)
  public loader : LoaderComponent = new LoaderComponent();

  ngAfterViewInit(){
    this.route.queryParams.subscribe({
      next : (res : any)=> {
        if(res?.url){
          this.getPlanetDetails(res.url);
        }
      },
      error : (err)=>{
        this.loader.stopLoading(err);
      }
    })
  }

  private getPlanetDetails(url : string){
    this.loader.startLoading();
    this.apiService.getDirect(url).subscribe(
      {
        next : (res : any)=>{
          this.residentData = res;
          this.getDataList(res.vehicles,'vehicles').forEach(
            res => {
              res.subscribe(
                {
                  next : data=> {
                    this.vehicles.push(data);
                  }
                }
              )
            }
          );
          this.getDataList(res.films,'films').forEach(
            res => {
              res.subscribe(
                {
                  next : (data)=> {
                    this.films.push(data);                    
                  }
                }
              )
            }
          );
          this.getDataList(res.starships,'starships').forEach(
            res => {
              res.subscribe(
                {
                  next : (data)=> {
                    this.starships.push(data);   
                    console.log("starships : ", this.starships);
                                     
                  }
                }
              )
            }
          );
          this.loader.stopLoading();
        },
        error : (err)=>{
          this.loader.stopLoading(err);
        }
      }
    )
  }

  private getDataList(urls : Array<string>,listKey:string):Array<Observable<any>>{
      return (urls).map(url => this.apiService.getDirect(url));
  }

}
