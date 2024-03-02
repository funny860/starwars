import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { apis } from 'src/global';
import { PAGE_SIZE } from 'src/constants';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
  private apiService: ApiService = inject(ApiService);
  public results : any = null;
  public count : number = 0;
  public pageSize : number = PAGE_SIZE;
  
  ngAfterViewInit():void{
    let params = new Map<string, any>();
    params.set('format','json');
    this.apiService.executeGet({
      url : apis.starships
    }).subscribe(
      {
        next: (res)=> {
          this.results = res.results;
        }
      }
    )
  }
  
}
