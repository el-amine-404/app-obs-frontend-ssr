import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const BASE_URL="http://localhost:8081/api/v1/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)

  constructor() { }

  getUsers() {
    return this.http.get(BASE_URL);
  }
}
