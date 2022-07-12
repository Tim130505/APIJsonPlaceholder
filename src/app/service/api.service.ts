import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, Photo, ToDo, User } from '../model/model';
import { Observable, tap } from 'rxjs';
import { ToDosComponent } from '../components/to-dos/to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  public getTodoByUserId(userId: number): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.apiUrl}/users/${userId}/todos`); 
    }
    
  public getAlbumByUserId(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/users/${userId}/albums`);
  }
  
  public getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${albumId}/photos`);
  }
  
  }
  

  

  