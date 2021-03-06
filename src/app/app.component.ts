import { Component, ViewEncapsulation } from '@angular/core';

import { PostsService } from "../core/services/posts.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class AppComponent {

    title = 'Qian test application';

    constructor( private postsService: PostsService ) {
    }
}
