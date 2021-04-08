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
  x = '';


  constructor() { }

  ngOnInit(): void {
    this.changeGreetings();
/*     this.addSnackBar(); */
  }

  /**
   * add a snackbar when the mail is sent
   */
 /*  addSnackBar() {
    console.log('snackbar');
    // Get the snackbar DIV
    let x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(() => {
      x.className = x.className.replace("show", "");
    }, 4000);
  } */


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


