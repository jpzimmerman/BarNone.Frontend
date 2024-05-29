import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef}  from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenupageComponent } from './menupage/menupage.component';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuitemComponent } from './menupage/menuitem/menuitem.component';
import { MatListModule } from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenupageComponent,
    MenuitemComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    ShoppingCartComponent,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
