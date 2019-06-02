import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/_models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  user = '';
  // newUser: User = {
  //   age: 0,
  //   email: '',
  //   id: 0,
  //   name: '',
  //   phone: '',
  //   website: ''
  // };
  isLoading = false;
  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.getUsers();
    // this.user = prompt('esmet chichiye ? ')
  }
  getUsers() {
    let data = setTimeout(() => {
      this.service.getUser().subscribe(response => {
        this.isLoading = false;
        this.users = response;
      });
    }, 1000);
    return data;

  }
  // showUser() {
  //   console.log(this.newUser);
  // }
}
