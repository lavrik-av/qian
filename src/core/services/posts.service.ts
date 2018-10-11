import { Injectable }				from '@angular/core';
import { HttpClient, HttpHeaders }	from '@angular/common/http';
import { Observable }				from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/Rx';

import { environment }	from "../../environments/environment";
import { Post }			from "../../core/models/post";

@Injectable()
export class PostsService {

	posts		: Post[] = new Array;
	postToEdit	: Post;

	OnAddPost		: BehaviorSubject<Post> = new BehaviorSubject( null );
	OnPostsReceived	: BehaviorSubject<boolean> = new BehaviorSubject( false );

	constructor( private httpClient: HttpClient ) {

		this.httpClient.get<Post[]>( environment.postsUrl ).subscribe( posts => {

			for (let index = 0; index < environment.postsAmount; index++) {

				this.posts.push( posts[index] );
				
			}

			this.OnPostsReceived.next( true );

		});
	}

	getPosts():Observable<Post[]> {

		return this.httpClient.get<Post[]>( environment.postsUrl )

	}

	addPost( post: Post ):void {

		this.posts.unshift( post );

	}
}
