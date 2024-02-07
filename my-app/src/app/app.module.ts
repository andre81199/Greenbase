import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SettingsComponent } from './settings/settings.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SettingsComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent,SettingsComponent],
})
export class AppModule { }
