import { Video } from './../video';
import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
 
@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

//  videos: Array<Video>;
  videos: Video [] = [
    { '_id': '1', 'title': 'Title 1', 'url': 'url1', 'description': 'desc 1'},
    { '_id': '2', 'title': 'Title 2', 'url': 'url2', 'description': 'desc 2'},
    { '_id': '3', 'title': 'Title 3', 'url': 'url3', 'description': 'desc 3'},
    { '_id': '4', 'title': 'Title 4', 'url': 'url4', 'description': 'desc 4'}
    ];

    selectedVideo: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }


}
