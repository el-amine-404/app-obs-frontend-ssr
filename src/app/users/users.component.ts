import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  private userService = inject(UserService);
  users: any = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next: (users: any) =>{
        this.users = users;
        console.log("Users fetched successfully");
      },
      error: (error) => console.log('Error fetching users:', error)
    });
  }

}
