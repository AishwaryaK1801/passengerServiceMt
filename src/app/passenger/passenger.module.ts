import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerCardsComponent } from './passenger-cards/passenger-cards.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    PassengerCardsComponent,
    PassengerCountComponent,
    PassengerDashboardComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PassengerDashboardComponent
  ]
})
export class PassengerModule { }
