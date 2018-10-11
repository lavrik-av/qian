import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { isNullOrUndefined } from "util";

import { Post }			from "../../core/models/post";
import { PostsService } from "../../core/services/posts.service";

@Component({
	selector: 'app-edit-post',
	templateUrl: './edit-post.component.html',
	styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

	post: Post;

	editPostForm : FormGroup;
	showForm	 : boolean = false;

	constructor( private postsService: PostsService, private fb: FormBuilder, private router: Router ) { }

	ngOnInit() {

		this.post = this.postsService.postToEdit;
		( !isNullOrUndefined( this.post ) ) ? this.createForm() : this.router.navigateByUrl( '/posts' );		

	}

	createForm():void {

		this.editPostForm = this.fb.group({
			id		: [ this.post.id,	 Validators.required ],
			userId  : [ this.post.title, Validators.required ],
			title	: [ this.post.title, Validators.required],
			body	: [ this.post.body,  Validators.required ]
		});

		this.showForm = true;
	}

	updatePost( post: Post ):void {

		this.postsService.postToEdit.title = post.title;
		this.postsService.postToEdit.body  = post.body;

		this.router.navigateByUrl( '/posts' )

	}
}
