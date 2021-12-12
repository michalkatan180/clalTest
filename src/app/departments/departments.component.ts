import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  arr: Object[] = [];
  constructor(private dService: DepartmentsService) { }

  ngOnInit(): void {
    this.arr = this.dService.getAll();
  }
  check(b): boolean {
    return b == 0;
  }
}
