import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDo, User } from 'src/app/model/model';

@Component({
  selector: 'app-user-list-detail',
  templateUrl: './user-list-detail.component.html',
  styleUrls: ['./user-list-detail.component.scss']
})
export class UserListDetailComponent implements OnInit {

  public user$: Observable<User> = new Observable<User>();
  private sub: any;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {
   }

   ngOnInit() {
    this.sub = this.route.params.subscribe((params: { [x: string]: string | number; }) => {
       this.user$ = this.apiService.getUserById(+params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public backToOverview(): void {
    this.router.navigate(['user']);
  }

}
