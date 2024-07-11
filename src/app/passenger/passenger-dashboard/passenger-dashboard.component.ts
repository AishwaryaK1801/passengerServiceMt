import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared1/models/passenger.interface';
import { PassengerService } from 'src/app/shared1/services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passArr!:Array<Ipassenger>
  totalCount !: number;
  checkInCount !: number;

  constructor(
    private _passService : PassengerService
  ) { }

  ngOnInit(): void {
    this.passArr= this._passService.fetchPassengerData();
    this.getCount();
  }

  getCount(){
    this.totalCount=this.passArr.length;
    this.checkInCount=this.passArr.filter(pass=>pass.checkedIn===true).length
  }
}
