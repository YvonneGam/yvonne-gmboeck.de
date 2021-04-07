import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
   name = "Angular " ;
  isInViewPort = false;
  portfolio!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    const portfolio = document.getElementById("portfolio");
    console.log(this.portfolio);

    window.addEventListener("scroll", () => {
      let rect = this.portfolio.getBoundingClientRect();
      //console.log(rect, window.innerHeight);
      if (rect.y >= 0 && rect.y <= window.innerHeight) {
        this.isInViewPort = true;
        // window.removeEventListener("scroll", () => {
        //   console.log("Ziel erreicht");
        // }, false);
      }
    });
  }
}

