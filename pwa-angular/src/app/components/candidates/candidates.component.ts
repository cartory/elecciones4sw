import { Component, OnInit } from '@angular/core';

import { PartyService } from 'src/app/services/party/party.service';
import { DownloadService } from 'src/app/services/download/download.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})

export class CandidatesComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    public partyService: PartyService,
    public downloadService: DownloadService,
    _config: NgbCarouselConfig
  ) { 
    _config.interval = 1100;
    _config.wrap = true;
    _config.keyboard = true;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = true;
  }

  ngOnInit() {
    this.partyService.getParties().subscribe(
      res => this.partyService.parties = res,
      err => console.error(err)
    );
  }
}
