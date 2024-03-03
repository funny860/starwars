import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  public loader : boolean = false;
  public error : any = null;
  public startLoading(){
    this.error = null;
    this.loader = true;
  }

  public stopLoading(err : any = null){
    if(err != null){
      this.error = "Error Fetching Data : " + err;
    }
    this.loader = false;
  }
}
