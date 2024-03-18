import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { firstpagenavComponent } from './firstpagenav/firstpagenav.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    firstpagenavComponent,
    AboutComponent,
    ServiceComponent,
    ContactusComponent,
    SlideComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
