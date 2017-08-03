import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ScrollCheckerDirective } from './scroll-checker.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
