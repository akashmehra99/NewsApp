import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  fetchedData = [];
  additionalData = null;

  constructor(private getData: GetDataService) {
    this.additionalData = this.getData.serviceEvent.subscribe(data => {
      this.setAddData();
    }
    );
  }

  ngOnInit() {
    const self = this;
    if (this.getData.checkDataAvail) {
      this.getData.getNewsData().subscribe(
        function (data) {
          self.setData(data);
        }
      );
    }
  }
  // To set servcie data
  setData(data): void {
    const parsedData = JSON.parse(data._body);
    if (parsedData.stories.length === 0) {
      this.getData.checkDataAvail = false;
    }
    this.fetchedData = (parsedData.stories);
  }

  // To fetch service data when scroll bar is moved
  setAddData(): void {
    const self = this;
    if (this.getData.checkDataAvail) {
      this.getData.serviceCallOnScroll();
      this.getData.getNewsData().subscribe(
        function (data) {
          self.mergeData(data);
        }
      );
    }
  }

  // Merge Data
  mergeData(data): void {
    const parsedData = JSON.parse(data._body);
    if (parsedData.stories.length === 0) {
      this.getData.checkDataAvail = false;
    }
    for (const x in parsedData.stories) {
      this.fetchedData.push(parsedData.stories[x]);
    }
  }
}
