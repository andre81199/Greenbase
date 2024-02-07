import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SettingsComponent } from './settings/settings.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileInformationComponent } from './settings/profile-information/profile-information.component';
import { NotificationsComponent } from './settings/notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SettingsComponent,
    ProfileInformationComponent,
    NotificationsComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent,SettingsComponent],
})
export class AppModule { }
