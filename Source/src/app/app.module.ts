import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { ArtistComponent } from './artist/artist.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: ':name', component: ArtistComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
