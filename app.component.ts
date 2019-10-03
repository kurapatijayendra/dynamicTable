import { Component } from '@angular/core';
import { InterationService } from './interation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicTable';
  public name:string = '';
  public location:string = '';

  public sourceObj:any ={};

 
  constructor(private _InterationService:InterationService){}
public tranMessage(){
  this._InterationService.sendMessage(this.sourceObj);
  this.sourceObj.name = this.name;
  this.sourceObj.location = this.location;

  console.log(this.sourceObj);
}


}
