import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "http://localhost:5221/api"
  readonly PhotoUrl = "http://localhost:5221/photos"

  constructor(private http:HttpClient) { }

  // Department API URLs
  getDepList():Observable<any[]> {
    return this.http.get<any>(this.ApiUrl+'/department');
  }

  addDepartment(val:any) {
    return this.http.post(this.ApiUrl+'/department', val);
  }

  updateDepartment(val:any) {
    return this.http.put(this.ApiUrl+'/department', val);
  }

  deleteDepartment(val:any) {
    return this.http.delete(this.ApiUrl+'/department/' + val);
  }

  getAllDepartmentNames():Observable<any[]> {
    return this.http.get<any[]>(this.ApiUrl+'department/GetAllDepartmentNames');
  }

  // Employee API URLs
  getEmpList():Observable<any[]> {
    return this.http.get<any>(this.ApiUrl+'/employee');
  }

  addEmployee(val:any) {
    return this.http.post(this.ApiUrl+'/employee', val);
  }

  updateEmployee(val:any) {
    return this.http.put(this.ApiUrl+'/employee', val);
  }

  deleteEmployee(val:any) {
    return this.http.delete(this.ApiUrl+'/employee/' + val);
  }

  uploadPhoto(val:any) {
    return this.http.post(this.ApiUrl+'/employee/SaveFile', val);
  }
}
