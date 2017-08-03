import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MasonryModule, MasonryOptions } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { HeaderComponent } from './header/header.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ScrollCheckerDirective } from './scroll-checker.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsFeedComponent,
    ScrollCheckerDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MasonryModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
