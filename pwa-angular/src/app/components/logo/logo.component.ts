import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit() {
    this.loadCanvas();
  }

  private loadCanvas() {
    this.canvas.nativeElement.width = 285;
    this.canvas.nativeElement.height = 480;
    // 
    const k = 2.2;
    const dx = 70;
    const dy = 100;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    // TOP
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = "rgba(255, 255, 0, 0.6)";
    this.ctx.fillRect(50 + dx / 2, 20, 60 * k, 100 * k);
    this.ctx.stroke();
    // MID
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = "rgba(0, 128, 0, .6)";
    this.ctx.fillRect(20 + dx / 3, 50 + dy / 3, 60 * k, 100 * k);
    this.ctx.stroke();
    // BOTTOM
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255, 0, 0, 0.6)";
    this.ctx.fillRect(60 + dx, 80 + 2 * dy / 3, 60 * k, 100 * k);
    this.ctx.stroke();
    // SQUARE
    this.ctx.beginPath();
    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = "rgba(160,161,162, .9)";
    this.ctx.rect(10, 105 + dy, 120 * k, 115 * k);
    this.ctx.stroke();
  }
}
