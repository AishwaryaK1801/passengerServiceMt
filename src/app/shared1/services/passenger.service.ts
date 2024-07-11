import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {


  passengerArray: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];

  constructor(private _snackbar : SnackbarService) { }

  fetchPassengerData(){
    return this.passengerArray
  }


  updatePassengerInfo(updatedObj : Ipassenger){
    let getUpdatedIndex= this.passengerArray.findIndex(pass=>pass.id===updatedObj.id);
    let oldObj = this.passengerArray[getUpdatedIndex];
    this.passengerArray[getUpdatedIndex]=updatedObj;
    this._snackbar.openSnackBar(`The passenger name is updated from ${oldObj.fullname} to ${updatedObj.fullname}`)
  }


  onPassRemove(removeObj:Ipassenger){
    let removeIndex= this.passengerArray.findIndex(pass=>pass.id===removeObj.id);
    this.passengerArray.splice(removeIndex,1)
    this._snackbar.openSnackBar(`The passenger ${removeObj.fullname} is removed successfully`)
  }
}
