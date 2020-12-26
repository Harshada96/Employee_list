import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserList } from "./user-list";

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  apiUrl: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<UserList[]> {
    return this.httpClient.get<UserList[]>(this.apiUrl);
  }
}
