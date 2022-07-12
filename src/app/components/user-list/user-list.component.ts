import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userList$: Observable<User[]>;

  constructor(private apiService: ApiService, private router: Router,) {
    this.userList$ = this.apiService.getUsers();
   }

  ngOnInit(): void {
    
  }

  public jumtToDetailView(id: number): void {
    this.router.navigate(['user', id]);
  }
  public showToDos(userId: number): void {
    this.router.navigate(['user', userId, 'todo']);
    console.log(userId);
  }
  public showAlbum(userId: number): void {
    this.router.navigate(['user', userId, 'albums']);
  }
}
