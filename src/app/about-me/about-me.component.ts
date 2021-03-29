import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
/*     this.mouseOver(); */
  }

  /**
   * Button Hover effect "about-me"
   */
/*   mouseOver() {
    console.log('test JS');

    @ViewChild('btn') btn: ElementRef;

    this.btn.nativeElement.getEventListener("mousemove", (e) => {
      xPos = e.pageX - e.target.offsetLeft;
      yPos = e.pageY - e.target.offsetTop;

      e.target.style.setProperty("--x", '${xPos}px');
      e.target.style.setProperty("--y", '${xPos}px');
    });
  } */
}
