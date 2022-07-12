import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User, ToDo } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  public todos$: Observable<ToDo[]> = new Observable();
  private sub: any;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      this.todos$ = this.apiService.getTodoByUserId(+params['userId']);
   });
  }

  public todosBackButton(){
    this.router.navigate(['user']);
  }



}

