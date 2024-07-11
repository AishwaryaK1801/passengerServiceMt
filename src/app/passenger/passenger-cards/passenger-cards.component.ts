import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared1/models/passenger.interface';
import { DialogService } from 'src/app/shared1/services/dialog.service';
import { PassengerService } from 'src/app/shared1/services/passenger.service';

@Component({
  selector: 'app-passenger-cards',
  templateUrl: './passenger-cards.component.html',
  styleUrls: ['./passenger-cards.component.scss']
})
export class PassengerCardsComponent implements OnInit {

  isInEditMode : boolean = false
  @Output() emitRemoveMsg :EventEmitter <boolean>= new EventEmitter<boolean>()
  @Input() getPass !: Ipassenger
  constructor(
    private _passService : PassengerService,
    private _dialogService : DialogService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(fullname:HTMLInputElement){
      this.getPass={...this.getPass, fullname:fullname.value };
      this._passService.updatePassengerInfo(this.getPass)
  }

  onPassRemove(){
    this._dialogService.openDialog('Confirmation', `Are You Sure? You want to remove  passenger ${this.getPass.fullname}` )
    .subscribe(result=>{
      if(result){
        this._passService.onPassRemove(this.getPass);
        this.emitRemoveMsg.emit(true)
      }
    })
   
  }
}
