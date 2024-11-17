import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityModule } from 'src/app/widgets/quantity/quantity.module';
import { QuantityComponent } from 'src/app/widgets/quantity/quantity.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgModule,
    QuantityModule
  ],
  exports: [QuantityComponent]
})
export class AdditemModule { }
