import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.filteredUsers = users;
      });
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name!.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
