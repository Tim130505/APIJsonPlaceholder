import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListDetailComponent } from './components/user-list-detail/user-list-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { PhotoComponent } from './photo/photo.component';
import { PicturesComponent } from './pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListDetailComponent,
    UserListComponent,
    ToDosComponent,
    PhotoComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
