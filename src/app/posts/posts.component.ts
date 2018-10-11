import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router }		from '@angular/router';

import { Subscription }		 from 'rxjs/Subscription';
import { isNullOrUndefined } from "util";

import { environment }	from "../../environments/environment";
import { PostsService } from "../../core/services/posts.service";
import { Post }		    from "../../core/models/post";

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

	showPosts	: boolean = false;

	OnPostsReceived : Subscription;
	OnAddPost	 	: Subscription;

	constructor( public postsService: PostsService, private router: Router ) { }

	ngOnInit() {

		this.OnPostsReceived = this.postsService.OnPostsReceived.subscribe( postsReceived => {

			this.showPosts = postsReceived;

		});
	}

	addPost( post: Post ):void {

		this.postsService.posts.push( post );

	}

	editPost( post: Post ):void {

		this.postsService.postToEdit = post;
		this.router.navigateByUrl( '/edit-post' );

	}

	removePost( postId: number ):void {

		for (let index = 0; index < this.postsService.posts.length; index++) {
			
			if ( this.postsService.posts[index].id == postId ) {

				this.postsService.posts.splice( index, 1);
				break;
				
			}
		}
	}

	ngOnDestroy(){

		( this.OnPostsReceived ) ? this.OnPostsReceived.unsubscribe() : false;

	}
}
