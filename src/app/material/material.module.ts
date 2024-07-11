import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

const matModule = [
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,
  MatSidenavModule,
  MatIconModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModule
  ],
  exports:[
    ...matModule
  ]
})
export class MaterialModule { }
