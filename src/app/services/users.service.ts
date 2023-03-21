import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/interfaces/main.interface';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor (private httpClient: HttpClient) {}

    url = 'https://jsonplaceholder.typicode.com/users/';

    getById(id: number): Observable<User> {
        return this.httpClient.get<User>(this.url + id);
    }
}