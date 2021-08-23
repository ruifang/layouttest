import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HelpComponent } from './help/help.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{
  path: '',
  component: PublicLayoutComponent,
  children: [{
    path: 'help',
    component: HelpComponent
  }, {
    path: 'terms',
    component: TermsOfUseComponent
  }]
}, {
  path: '',
  component: DefaultLayoutComponent,
  children: [{
    path: 'userprofile',
    component: UserProfileComponent
  }]
}, {
  path: '**',
  redirectTo: 'help',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const routes2: Routes = [
  {
    path: '',
    redirectTo: 'help',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class AppRootRoutingModule { }
