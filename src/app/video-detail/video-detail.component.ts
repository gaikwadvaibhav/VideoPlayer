import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {

  private editTitle = false;
  constructor() { }

  ngOnInit() {
  }

  OnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

}
