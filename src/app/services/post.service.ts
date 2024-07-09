import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const BASE_URL="https://jsonplaceholder.typicode.com/users"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient)

  constructor() { }

  getUsers() {
    return this.http.get(BASE_URL);
  }
}
