import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent }    from "../app/posts/posts.component";
import { PostComponent }     from "../app/post/post.component";
import { AddPostComponent }  from "../app/add-post/add-post.component";
import { EditPostComponent } from "../app/edit-post/edit-post.component";

const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts',     component: PostsComponent },
    { path: 'post',      component: PostComponent },
    { path: 'add-post',  component: AddPostComponent },
    { path: 'edit-post', component: EditPostComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
