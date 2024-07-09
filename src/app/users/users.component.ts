import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  // http = inject(HttpClient);
  private userService = inject(UserService);
  users: any = [];

  ngOnInit(): void {
    // this.fetchUsers();
    this.loadUsers();
  }

  // fetchUsers(){
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((users: any) => {
  //       console.log(users);

  //       this.users = users;
  //     });
  // }

  // loadUsers(){
  //   this.userService.getUsers().subscribe((users: any) => {
  //     console.log(users);
  //     this.users = users;
  //   })
  // }
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
