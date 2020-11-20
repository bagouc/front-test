import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) { };

  user = null;
  modelTest = { login: "", password: "" };
  error = false;
  connected = false;

  submit() {
    this.appService.login(this.modelTest).subscribe({
      next: (result) => {
        console.log(result);
        this.connected = true;
      },

      error: (err) => {
        this.error = true;
      }
    });
  }

  cancel() {
    this.modelTest = { login: "", password: "" };
    this.error = false;
  }

  callAPI() {
    this.appService.getUser().subscribe((result) => {
      this.user = result;
      console.log(this.user);
    });
  }
}
