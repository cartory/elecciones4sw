import { Component, OnInit } from '@angular/core';
import { Count } from 'src/app/models/count';
import { VoterService } from '../../services/voter/voter.service';
@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit {

  constructor(public voterService: VoterService) { }

  ngOnInit() {
    this.voterService.getVoters().subscribe(
      res => console.log(this.voterService.count = res),
      err => console.log(err)
    );
  }
}
