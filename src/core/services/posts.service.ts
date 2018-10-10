import { Injectable }				from '@angular/core';
import { HttpClient, HttpHeaders }	from '@angular/common/http';
import { Observable }				from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/Rx';

import { environment }	from "../../environments/environment";
import { Post }			from "../../core/models/post";

@Injectable()
export class PostsService {

	OnAddPost: BehaviorSubject<Post> = new BehaviorSubject( null );

	constructor( private httpClient: HttpClient ) {

	}

	getPosts():Observable<Post[]> {

		return this.httpClient.get<Post[]>( environment.postsUrl )

	}

	addPost( post: Post ):void {

		this.OnAddPost.next( post )

	}
}
