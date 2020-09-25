import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/services/download/download.service';

import { VoterService } from 'src/app/services/voter/voter.service';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})

export class VotersComponent implements OnInit {

  constructor(
    public voterService: VoterService, 
    public downloadService: DownloadService
  ) { }
  
  ngOnInit() {
    this.voterService.getVoters().subscribe(
      res => this.voterService.count = res,
      err => console.error(err)
    );
  }
}
