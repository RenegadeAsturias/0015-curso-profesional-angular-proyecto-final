import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '0015-curso-profesional-angular-proyecto-final';

  onScroll() {
    console.log("scrolled!!");
  }
}
