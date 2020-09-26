import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js'
import { PartyService } from 'src/app/services/party/party.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(
    private partyService: PartyService
  ) { }

  // title = 'angular8chartjs';
  // canvas: any;
  // ctx: any;

  countDownDate = new Date("october 10, 2020 00:00:00").getTime();
  demo: string;

  ngOnInit() {
    this.partyService.getParties().subscribe(
      res => {
        this.partyService.parties = res;
        this.loadChart();
      },
      err => console.error(err)
    );
  }

  x = setInterval(() => {
    var now = new Date().getTime();
    var dif = this.countDownDate - now;
    var days = Math.floor(dif / (24000 * 3600));
    var hours = Math.floor(dif % (24000 * 3600) / (3600000));
    var mins = Math.floor(dif % (3600000) / (60000));
    var secs = Math.floor(dif % (60000) / (1000));
    this.demo = `${days} d ${hours} h ${mins} m ${secs} s`;
  })

  // private load_countdown_date() {
  // }

  private loadChart() {
    // this.canvas = document.getElementById('myChart');
    // this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: this.partyService.parties.map(e => e.acronym),
        datasets: [{
          label: '# of Votes',
          data: [
            1, 2, 3, 2, 1, 2, 3, 2
          ],
          backgroundColor: [
            'rgba(169, 21, 33, .75)',
            'rgba(155, 32, 145, .75)',
            'rgba(239, 99, 37, .75)',
            'rgba(5, 101, 74, .75)',
            'rgba(125, 199, 34, .75)',
            'rgba(37, 154, 22, .75)',
            'rgba(21, 55, 135, .75)',
            'rgb(215, 1, 9, .75)'
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
}
