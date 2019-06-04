import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/_models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() singlePost: Post;
  @Output() deletePost = new EventEmitter<number>();
  commentsToggle = 0;
  constructor() { }

  ngOnInit() {
  }

  deletePostFn(postId) {
    this.deletePost.emit(postId);
  }
}
