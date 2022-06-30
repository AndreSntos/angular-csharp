import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../models/register.model';
import { RegisterService } from '../service/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  usersList: any;
  constructor(public register_service: RegisterService) {}

  ngOnInit(): void {
    this.resetForm();
    this.loadUsers();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.register_service.formData = {
      Id: 0,
      Name: '',
      Age: 0,
      Address: '',
    };
  }

  loadUsers() {
    this.register_service.loadUsers().subscribe((data) => {
      this.usersList = data as Register[];
      console.log(this.usersList);
    });
  }

  OnSubmit(form: NgForm) {
    if (this.register_service.formData.Id == 0) {
      this.InsertUser();
    } else {
      this.UpdateUser();
    }

    this.resetForm();
  }

  InsertUser() {
    this.register_service.insertUser().subscribe(
      (res: any) => {
        this.loadUsers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  UpdateUser() {
    this.register_service.updateUser().subscribe(
      (res: any) => {
        this.loadUsers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ToForm(user: Register) {
    this.register_service.formData = Object.assign({}, user);
  }

  DeleteUser(Id: Number) {
    if (confirm('Você tem certeza?'))
      this.register_service.deleteUser(Id).subscribe(
        (res: any) => {
          this.loadUsers();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
