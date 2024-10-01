import { TextFieldModule } from '@angular/cdk/text-field';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

export interface DialogData {
  itemName: string;
  itemQuantity: number;
  itemIngredients: string;
}

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [MatInputModule, TextFieldModule, MatCheckboxModule, MatButtonModule, FormsModule],
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.scss'
})
export class AdditemComponent {
  quantity: number = 30;
  specialInstructions: string = ""

  constructor(
    public dialogRef: MatDialogRef<AdditemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) 
    {
      this.quantity = data.itemQuantity;
    }


onCancel() {
  this.dialogRef.close();
}

onConfirm() {
  this.dialogRef.close({quantity:this.quantity, specialInstructions:this.specialInstructions});
}
}
