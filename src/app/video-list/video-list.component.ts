import { Video } from './../video';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['videos'],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['SelectVideo']

})
export class VideoListComponent implements OnInit {

  public SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

}
