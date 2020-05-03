import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'prenom', 'nom', 'datebirth', 'roles'];


  title = 'Liste des utilisateurs inscrits';
  // userlist: Observable<User[]>;
  userList:User[];

  
  constructor(
    private httpClient: HttpClient
  ) { }


  ngOnInit(): void {

    this.httpClient.get<User[]>('http://localhost:8080/api-user/').subscribe(list=>{
      this.userList = list;

      });
      
}
}
