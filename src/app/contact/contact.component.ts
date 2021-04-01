import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  greetings = ['Hi,', 'Servus,'];
  currentText = 0;
  showText = true;


  constructor() { }

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


}


