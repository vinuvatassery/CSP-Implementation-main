import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CspComponent } from '../Csp/Csp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CspComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
