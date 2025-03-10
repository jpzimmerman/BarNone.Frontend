import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [MatButtonModule],
})
export class QuantityModule {}
