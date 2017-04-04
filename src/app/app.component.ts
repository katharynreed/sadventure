import { Component, OnInit } from '@angular/core';
import { Frame } from './frame.model';
import { FrameDetailComponent } from './frame-detail/frame-detail.component';
import { FrameService } from './frame.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FrameService]
})
export class AppComponent implements OnInit {
  frames: FirebaseListObservable<any[]>;
  constructor(private frameService: FrameService) { }

  ngOnInit() {
    this.frames = this.frameService.getFrames();
  }
}
