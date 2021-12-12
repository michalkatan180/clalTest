import { Injectable } from '@angular/core';
// import emps from './emp.json'
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService  {
  arr: Object[] = [];
  constructor() {
    this.arr.push(
      
      {
        "DepartmentID": "1",
        "DepartmentName": "aaa",
        "ParentID": "0"
    },
    {
        "DepartmentID": "2",
        "DepartmentName": "bbb",
        "ParentID": "20"
    },
    {
        "DepartmentID": "3",
        "DepartmentName": "ccc",
        "ParentID": "0"
    },
    {
        "DepartmentID": "4",
        "DepartmentName": "ddd",
        "ParentID": "40"
    }
    )
  }
  getAll(): Object[] {
    return this.arr;
  }
}
