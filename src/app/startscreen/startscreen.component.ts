import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  greetings = ['Hi,', 'Servus,', 'Hello,'];
  currentText = 0;
  showText = true;



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


}
