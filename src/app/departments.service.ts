import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  listOfDepartments  = [{id:1, title:'Angular', description:'Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop'},
  {id:2, title:'Node', description:'Node.js is an open source server environment, uses JavaScript on the server'},
  {id:3, title:'Mongodb', description:'MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need'},
  {id:4, title:'Ruby', description:'Ruby is A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.'},
  {id:5, title:'Bootstrap', description:'Bootstrap is is the most popular CSS Framework for developing responsive and mobile-first websites.'}]
}
