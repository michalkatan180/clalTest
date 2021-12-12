import { Component, OnInit, } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private empService: EmpService) { }
  arr: Emp[] = [];
  ngOnInit(): void {
    this.arr = this.empService.getAll();
  }
}
