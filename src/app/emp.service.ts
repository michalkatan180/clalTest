import { Injectable } from '@angular/core';
import { Emp } from './emp';
// import emps from './emp.json'
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emps: Emp[] = [];
  constructor() {
    // this.emps = emps;
    this.emps.push(

      {
        "EmployeeName": "A",
        "EmployeePicture": "piture path here"
      },
      {
        "EmployeeName": "B",
        "EmployeePicture": "piture path here"
      },
      {
        "EmployeeName": "C",
        "EmployeePicture": "piture path here"
      },
      {
        "EmployeeName": "D",
        "EmployeePicture": "piture path here"
      }
    )
  }
  getAll(): Emp[] {
    return this.emps;
  }
}
