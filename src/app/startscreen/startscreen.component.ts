import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  greetings = ['Hi,', 'Servus,'];
  currentText = 0;
  showText = true;
  scrolled = false;



  ngOnInit(): void {
    this.changeGreetings();
  }

  /**
   * Changes the greeting-text on init every 8seconds
   */
  changeGreetings() {

    setInterval(() => {
      this.currentText++;
      this.currentText = this.currentText % this.greetings.length;
      this.showText = false;

      setTimeout(() => {
        this.showText = true;
      }, 1);

    }, 4000);
  }

  constructor() { }


 //stackoverflow.com/questions/58446080/how-to-make-component-disappear-when-scroll-down-in-angular

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: { srcElement: { scrollTop: number; }; }) {
      this.scrolled = $event.srcElement.scrollTop <= 50;
  }


}
