import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js'
import { PartyVote } from 'src/app/models/party_vote';
import { PartyService } from 'src/app/services/party/party.service';
import { DownloadService } from 'src/app/services/download/download.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  demo: string;
  location: string = "";
  type_chart: string = "pie";

  countDownDate = new Date("october 9, 2020 00:00:00").getTime();

  constructor(
    public partyService: PartyService,
    public downloadService: DownloadService
  ) { }

  ngOnInit() {
    this.partyService.get_parties_votes(this.downloadService.default).subscribe(
      res => {
        this.partyService.parties_votes = res;
        this.loadChart(res);
      },
      err => console.error(err)
    );
  }

  changeChart() {
    this.type_chart = (this.type_chart == "pie") ? "bar" : "pie";
    this.loadChart(this.partyService.parties_votes);
  }

  onKey(event: any) {
    this.location = event.target.value;
    if (this.location.length > 0) {
      if (event.key == 'Enter') {
        this.partyService.get_parties_votes(this.location).subscribe(
          res => {
            this.partyService.parties_votes = res;
            this.loadChart(res);
          },
          err => console.error(err)
        );
      }
    }
  }

  private loadChart(parties_votes: PartyVote[]) {
    let alfa: number = .8;
    new Chart("myChart", {
      type: this.type_chart,
      data: {
        labels: parties_votes.map(e => e.acronym.split(",")[0]),
        datasets: [{
          label: '# Votos',
          data: parties_votes.map(e => e.votes),
          backgroundColor: [
            `rgba(239, 99, 37,${alfa})`,
            `rgba(  5,101, 74,${alfa})`,
            `rgba(  3,110, 56,${alfa})`,

            `rgba(  0,169,237,${alfa})`,
            `rgba( 20, 58,131,${alfa})`,
            `rgba(224, 34, 18,${alfa})`,

            `rgba(  2, 97,103,${alfa})`,
            `rgba(236,131,174,${alfa})`,
            `rgba(215,  1,  9,${alfa})`,
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        display: true
      }
    });
  }

  /***
   * TIMER for SHOWING
   */

  x = setInterval(() => {
    var now = new Date().getTime();
    var dif = this.countDownDate - now;
    var days = Math.floor(dif / (24000 * 3600));
    var hours = Math.floor(dif % (24000 * 3600) / (3600000));
    var mins = Math.floor(dif % (3600000) / (60000));
    var secs = Math.floor(dif % (60000) / (1000));
    this.demo = `${days} d ${hours} h ${mins} m ${secs} s`;
  })
}
