import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MenuitemModule } from './menuitem/menuitem.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonToggleGroup,
    MatButtonModule,
    MatCardModule,
    MenuitemModule,
  ],
  exports: [MatButtonModule],
})
export class MenupageModule {}
