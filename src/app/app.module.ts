import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRootRoutingModule, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { HeaderComponent } from './header/header.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    UserProfileComponent,
    FooterComponent,
    PublicFooterComponent,
    HeaderComponent,
    DefaultLayoutComponent,
    PublicLayoutComponent,
    PublicHeaderComponent,
    TermsOfUseComponent
  ],
  imports: [
    BrowserModule,
    AppRootRoutingModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
