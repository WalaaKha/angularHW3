import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DepartmentsService}  from '../departments.service';

@Component({
  selector: 'app-department-description',
  templateUrl: './department-description.component.html',
  styleUrls: ['./department-description.component.css']
})
export class DepartmentDescriptionComponent implements OnInit {
  public departmentId;
  public departmentTitle;
  dataCollection;
  constructor(private route: ActivatedRoute, private depts:DepartmentsService) { }

  ngOnInit() {
    this.dataCollection =  this.depts.listOfDepartments;
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.selectedDepartment =this.depts[id];
    //console.log("selected dept = " + this.selectedDepartment);
    this.departmentId = id;
    
  }

}
