import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  name = "Angular ";
  isInViewPort = false;
  skills!: any;

  constructor() { }

  ngOnInit(): void {
    this.skills = document.getElementById("skills");
    console.log(this.skills);

    window.addEventListener("scroll", () => {
      let rects = this.skills.getBoundingClientRect();
      console.log(rects, window.innerHeight);

      if (rects.y >= 0 && rects.y <= window.innerHeight) {
        this.isInViewPort = true;
        // window.removeEventListener("scroll", () => {
        console.log("Ziel erreicht");
        // }, false);
      }
    });
  }

}

