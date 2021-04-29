import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  name = "Angular ";
  isInViewPort = false;
  aboutMe!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    const aboutMe = document.getElementById("aboutMe");
    console.log(aboutMe);

    window.addEventListener("scroll", () => {
      let rect = this.aboutMe.getBoundingClientRect();
      console.log(rect, window.innerHeight);
      
      if (rect.y >= 0 && rect.y <= window.innerHeight) {
        this.isInViewPort = true;
        // window.removeEventListener("scroll", () => {
        console.log("Ziel erreicht");
        // }, false);
      }
    });
  }

}

