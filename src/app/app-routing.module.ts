import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { UserListDetailComponent } from './components/user-list-detail/user-list-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'user/:id',
    component: UserListDetailComponent
  },
  {
    path: 'user/:userId/todo',
    component: ToDosComponent
  },
  {
    path: 'user/:userId/albums',
    component: PhotoComponent },

  {
    path: 'user/albums/:albumId/photos',
    component: PicturesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
