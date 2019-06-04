import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CustomComment } from 'src/app/_models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, AfterViewInit {

  @Input() postId: number;
  comments: CustomComment[];
  isLoading = false;
  constructor(
    private userSv: UserService
  ) { }

  ngOnInit() {
    this.isLoading = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.userSv.getPostComments(this.postId).subscribe(res => {
        this.comments = res;
        this.isLoading = false;
      });
    }, 3000);
  }
  removeComment(id: number) {
    const comment =  this.comments.findIndex(a => a.id === id );
    this.comments.splice(comment, 1);
  }
}
