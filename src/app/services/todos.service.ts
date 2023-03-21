import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/interfaces/main.interface';

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    constructor (private httpClient: HttpClient) {}

    url = 'https://jsonplaceholder.typicode.com/todos/';

    getList(limit: number = 5): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(
            this.url, 
            {
                params: {
                    _limit: limit
                }
            }
        )
    }

    getById(id: number): Observable<Todo> {
        return this.httpClient.get<Todo>(this.url + id);
    }
}