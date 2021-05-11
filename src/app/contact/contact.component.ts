import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  endpoint = 'https://yvonne-gamboeck.developerakademie.com/assets/send_mail.php';

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('')
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.changeGreetings();
console.log('message', this.profileForm);

/*     this.addSnackBar(); */
  }

  submit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);

    this.http.post(this.endpoint, this.profileForm.value).subscribe(
      (      response: any) => {
        console.log(response);

        this.profileForm.reset();
      },
      (      error: any) => {
        console.error(error);
        this.profileForm.reset();
      }
    );
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
