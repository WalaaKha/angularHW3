import { Component, OnInit } from '@angular/core';
import {DepartmentsService}  from '../departments.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dataCollection =[];
  selectedDepartment;
  constructor(private depts:DepartmentsService, private router: Router) { }

  ngOnInit() {
    this.dataCollection =  this.depts.listOfDepartments;
  }

  onSelect(dept){
    console.log(dept);
    this.router.navigate(['/departments', dept.id])
  }

}
