import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UsersService } from '../Services/user/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-index-page',
  templateUrl: './user-index-page.component.html',
  styleUrls: ['./user-index-page.component.css']
})
export class UserIndexPageComponent implements OnInit {
  users: User[] = [];
  userForm!: FormGroup;
  isFormVisible = false;
  isEditMode = false;
  selectedUserId: number | null = null;

  constructor(private userService: UsersService, private fb: FormBuilder ) {}

  
  

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

}
