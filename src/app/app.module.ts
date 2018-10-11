import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }     from '@angular/common/http';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from "@angular/forms";

import { 
    MatSidenavModule, 
    MatButtonModule, 
    MatButtonToggleModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule
} from '@angular/material';

import { PostsService }     from "../core/services/posts.service";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { PostsComponent }       from './posts/posts.component';
import { PostComponent }        from './post/post.component';
import { AddPostComponent }     from './add-post/add-post.component';
import { EditPostComponent }    from './edit-post/edit-post.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        PostComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatSidenavModule, 
        MatButtonModule, 
        MatButtonToggleModule, 
        MatCardModule, 
        MatMenuModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatInputModule,
        ReactiveFormsModule
    ],
    providers: [
        PostsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
