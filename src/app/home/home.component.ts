import { Component, OnInit } from '@angular/core';
import { Frame } from './../frame.model';
import { FrameDetailComponent } from './../frame-detail/frame-detail.component';
import { FrameService } from './../frame.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frames: FirebaseListObservable<any[]>;
  constructor(private router: Router, private frameService: FrameService) { }

  ngOnInit() {
    this.frames = this.frameService.getFrames();
  }

  goToDetailPage(clickedFrame) {
    this.router.navigate(['frames', clickedFrame.$key]);
  }

}
