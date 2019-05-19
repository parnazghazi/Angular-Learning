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
  user = 'Parnaz';
  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    
    return this.service.getUser().subscribe(response => { this.users = response; });

  }

}
