import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenupageComponent } from './menupage/menupage.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'menu', component: MenupageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
