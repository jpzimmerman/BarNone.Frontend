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
import { CookieService } from 'ngx-cookie-service'
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { QuantityModule } from "./widgets/quantity/quantity.module";

@NgModule({
  declarations: [
    AppComponent,
    MenupageComponent,
    MenuitemComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    NgbModule,
    QuantityModule
],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    CookieService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {

}
