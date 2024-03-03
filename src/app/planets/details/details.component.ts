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
  public planetData : any = null;
  public people : any = [];
  public films : any = [];

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
          this.planetData = res;
          this.getDataList(res.residents,'residents').forEach(
            res => {
              res.subscribe(
                {
                  next : data=> {
                    this.people.push(data);
                  }
                }
              )
            }
          );
          this.getDataList(res.films,'films').forEach(
            res => {
              res.subscribe(
                {
                  next : data=> {
                    this.films.push(data);
                    console.log('films : ', this.films);
                    
                  }
                }
              )
            }
          );
          this.loader.startLoading();
          // this.films = this.getDataList(res.films,'films');
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
