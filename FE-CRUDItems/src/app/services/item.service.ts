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
}
