import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Album, User, ToDo } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  public album$: Observable<Album[]> = new Observable();
  private sub: any;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      this.album$ = this.apiService.getAlbumByUserId(+params['userId']);
   });
  }


  public showPhotos(albumId: number): void {
    this.router.navigate(['user', 'albums', albumId, 'photos']);
  }
}
