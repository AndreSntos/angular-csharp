import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly rootURL = 'https://localhost:44386/api/';

  formData!: Register;
  constructor(private http: HttpClient) {}

  loadUsers() {
    return this.http.get(this.rootURL + 'Users');
  }

  insertUser() {
    return this.http.post(this.rootURL + 'Users', this.formData);
  }

  updateUser() {
    return this.http.put(this.rootURL + 'Users/' + this.formData.Id, this.formData);
  }

  deleteUser(Id: Number){
    return this.http.delete(this.rootURL + 'Users/' + Id)
  }
}
