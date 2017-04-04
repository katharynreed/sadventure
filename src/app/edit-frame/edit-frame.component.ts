import { Component, Input, OnInit } from '@angular/core';
import { Frame } from './../frame.model';
import { FrameService } from './../frame.service';

@Component({
  selector: 'app-edit-frame',
  templateUrl: './edit-frame.component.html',
  styleUrls: ['./edit-frame.component.css'],
  providers: [FrameService]
})
export class EditFrameComponent implements OnInit {
  @Input() selectedFrame;

  constructor(private frameService: FrameService) { }

  ngOnInit() {
  }

  beginUpdatingFrame(frameToUpdate){
    this.frameService.updateFrame(frameToUpdate);
  }

}
