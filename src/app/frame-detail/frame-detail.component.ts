import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FrameService } from './../frame.service';
import { Frame } from './../frame.model';

@Component({
  selector: 'app-frame-detail',
  templateUrl: './frame-detail.component.html',
  styleUrls: ['./frame-detail.component.css'],
  providers: [FrameService]
})
export class FrameDetailComponent {

  frameId: number = null;
  frame: any;

  constructor(private route: ActivatedRoute, private location: Location, private frameService: FrameService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.frameId = parseInt(urlParameters['id']);
    });
    this.frame = this.frameService.getFrame(this.frameId);
  }
}
