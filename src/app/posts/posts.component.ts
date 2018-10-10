import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router }		from '@angular/router';

import { Subscription }				from 'rxjs/Subscription';

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

	posts		: Post[] = new Array();
	showPosts	: boolean = false;

	OnAddPost	: Subscription;

	constructor( public postsService: PostsService ) { }

	ngOnInit() {

		this.OnAddPost = this.OnAddPost = this.postsService.OnAddPost.subscribe( post => {

			( post ) ? this.posts.push( post ) : false;

		});

		this.postsService.getPosts().subscribe( posts => {

			for (let index = 0; index < environment.postsAmount; index++) {

				this.posts.push( posts[index] );
				
			}

			this.showPosts = true;

		});
	}

	addPost( post: Post ):void {

		this.posts.push( post );

	}

	removePost( postId: number ):void {

		for (let index = 0; index < this.posts.length; index++) {

			const element = this.posts[index];		

			if ( element.id == postId ) {

				this.posts.splice( index, 1);
				break;
				
			}
		}
	}

	ngOnDestroy(){

		( this.OnAddPost ) ? this.OnAddPost.unsubscribe() : false;

	}
}
