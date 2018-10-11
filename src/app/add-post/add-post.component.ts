import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

import { PostsService } from "../../core/services/posts.service";
import { Post } from "../../core/models/post";

@Component({
	selector: 'app-add-post',
	templateUrl: './add-post.component.html',
	styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

	addPostForm : FormGroup;

	constructor( 
		private postsService: PostsService, 
		private fb: FormBuilder, 
		private router: Router ) { }

	ngOnInit() {

		this.createForm();
	}

	createForm():void {

		this.addPostForm = this.fb.group({
			"title"		: 	[ null, [ Validators.required ] ],
			"body"		: 	[ null, [ Validators.required ] ]
		});
	}

	addPost( form: any ):void {

		let post = <Post>{};

		post.id		= Math.floor(Math.random() * 1000);
		post.userId = Math.floor(Math.random() * 1000);
		post.title  = form.title;
		post.body   = form.body;

		this.postsService.addPost( post );
		this.router.navigateByUrl( '/posts' );
		
	}
}
