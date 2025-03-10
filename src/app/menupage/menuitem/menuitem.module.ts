import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { QuantityModule } from 'src/app/widgets/quantity/quantity.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, QuantityModule],
})
export class MenuitemModule {}
