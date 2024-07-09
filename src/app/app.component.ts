import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-obs-front';
}
