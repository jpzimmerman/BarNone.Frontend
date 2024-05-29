import { TextFieldModule } from '@angular/cdk/text-field';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  itemName: string;
  itemIngredients: string;
}

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [MatInputModule, TextFieldModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.scss'
})
export class AdditemComponent {
  constructor(
    public dialogRef: MatDialogRef<AdditemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


onCancel() {

}

onConfirm() {

}
}
