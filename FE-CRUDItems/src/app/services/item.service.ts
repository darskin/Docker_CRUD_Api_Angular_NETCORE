import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private myAppUrl: string = enviroment.endpoint;
  private myApiUrl: string = 'api/Items/';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.myAppUrl}${this.myApiUrl}`, item);
  }

  updateItem(id: number, item: Item): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, item);
  }
}
