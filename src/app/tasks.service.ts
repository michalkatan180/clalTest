import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  arr: Object[] = [];
  constructor() {
    this.arr.push({ "TaskNumber": 1, "TaskName": "t1", "StatusID": 1, " EmployeeName ": "Employee Name", " DepartmentID ": 1, "DueDate": new Date(2020, 1, 1) },
      { "TaskNumber": 2, "TaskName": "t2", "StatusID": 1, " EmployeeName ": "Employee Name", " DepartmentID ": 1, "DueDate": new Date(2018, 1, 1) },
      { "TaskNumber": 3, "TaskName": "t3", "StatusID": 1, " EmployeeName ": "Employee Name", " DepartmentID ": 3, "DueDate": new Date(2028, 1, 1) },
      { "TaskNumber": 4, "TaskName": "t4", "StatusID": 0, " EmployeeName ": "Employee Name", " DepartmentID ": 4, "DueDate": new Date(2010, 1, 1) })
  }
  getAll(): Object[] {
    return this.arr;
  }
}
