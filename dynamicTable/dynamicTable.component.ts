import { Component, OnInit } from '@angular/core';
import { InterationService } from '../interation.service';

@Component({
  selector: 'app-dynamicTable',
  templateUrl: './dynamicTable.component.html',
  styleUrls: ['./dynamicTable.component.css']
})
export class SiblingComponent implements OnInit {
  public dataSource:any ;

  constructor(private _InterationService:InterationService) {  }

  ngOnInit() {
    this._InterationService.Message$.subscribe( res => this.dataSource = res)
   
  }




}
