import { Component } from '@angular/core';
import { FrameService } from './../frame.service';
import { Frame } from './../frame.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FrameService]
})
export class AdminComponent {

  constructor(private frameService: FrameService) { }

  beginCreatingFrame(input) {
    let newFrame = new Frame(input, [["Choice 1", 0], ["Choice 2", 0]]);
    this.frameService.newFrame(newFrame);
  }

}
