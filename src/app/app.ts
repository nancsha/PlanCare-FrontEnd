// import { Component,signal } from '@angular/core';
// import { RouterOutlet, RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterOutlet,
//     RouterLink   // ✅ REQUIRED for <a routerLink>
//   ],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class App {
//     protected readonly title = signal('CarRegistrationAppFrontEnd');
// }

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
      protected readonly title = signal('CarRegistrationAppFrontEnd');

}

