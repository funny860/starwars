import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequest } from 'src/app.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http : HttpClient
  ) { }

  public executeGet(requestData : ApiRequest):Observable<any>{
    let params = new HttpParams();
    if(requestData.params){
      (requestData.params).forEach((value, key) => {
        params = params.append(key, String(value)); // Convert values to string
      });
    }
    return this.http.get(environment.base_url + requestData.url, {params : params});
  }
}

