import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @ViewChild('btn')
  btn!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.mouseOver(); 
  }

  /**
   * Button Hover effect "about-me"
   */
   mouseOver() {
    console.log('test JS');

    this.btn.nativeElement.getEventListener("mousemove", (e: { pageX: number; target: { offsetLeft: number; offsetTop: number; style: { setProperty: (arg0: string, arg1: string) => void; }; }; pageY: number; }) => {
      const xPos = e.pageX - e.target.offsetLeft;
      const yPos = e.pageY - e.target.offsetTop;

      e.target.style.setProperty("--x", '${xPos}px');
      e.target.style.setProperty("--y", '${yPos}px');
    });
  } 
}
