import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Album, User, ToDo, Photo } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public photos$: Observable<Photo[]> = new Observable();
  private sub: any;
  public popup: any = document.getElementsByClassName("image-link");

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      this.photos$ = this.apiService.getPhotosByAlbumId(+params['albumId']);
   });
  }

  public getBack(): void {
    this.popup.close();
  }

}
