import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homepage/home-page/home-page.component';
import { MenupageComponent } from './menupage/menupage.component';
import { BountypageComponent } from './bounties/bountypage.component';
import { RollfordrinkComponent } from './rollfordrink/rollfordrink.component';
import { OneshotComponent } from './oneshot/oneshot.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'menu', component: MenupageComponent },
  { path: 'bounties', component: BountypageComponent },
  { path: 'oneshot', component: OneshotComponent },
  { path: 'rollfordrink', component: RollfordrinkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
