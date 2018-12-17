import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string = 'angular course';
  data = [
    {id:1, name:'Inas1'},
    {id:2, name:'Inas2'},
    {id:3, name:'Inas3'},
    {id:4, name:'Inas4'},

  ];
  constructor() { }

  ngOnInit() {
  }

  btnClick(){
    this.title = "title changes";
  }

}
