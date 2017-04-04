import { Injectable } from '@angular/core';
import { Frame } from './frame.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FrameService {
  frames: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.frames = angularFire.database.list('frames');
  }

  getFrames() {
    return this.frames;
  }

  getFrame(frameId) {
    return this.angularFire.database.object('frames/' + frameId);
  }

  updateFrame(localUpdatedFrame) {
    let frameEntryInFirebase = this.getFrame(localUpdatedFrame.$key);
    frameEntryInFirebase.update({text: localUpdatedFrame.text});
  }

  newFrame(newFrame: Frame) {
    this.frames.push(newFrame);
  }

}
