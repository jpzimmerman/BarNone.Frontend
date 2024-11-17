import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { QuantityComponent } from './quantity.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [QuantityComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [QuantityComponent]

})
export class QuantityModule { }
