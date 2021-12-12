import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  arr: Object[] = [];
  constructor(private tSer: TasksService) { }

  ngOnInit(): void {
    this.arr = this.tSer.getAll();
  }
  num: string = "10";
  getNum(): Object[] {
    let tmp: Object[] = [];
    for (var i = 0; i < this.arr.length && i < parseInt(this.num); i++) {
      tmp.push(this.arr[i]);
    }
    return tmp;
  }
  isGood(d: Date): boolean {
    return d > new Date();
  }
  checkIndex(i:number){
    return i<parseInt(this.num);

  }
}
