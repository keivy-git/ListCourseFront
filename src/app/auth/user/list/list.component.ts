import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'prenom', 'nom', 'datebirth', 'roles'];


  title = 'Liste des utilisateurs inscrits';
  userList:User[];
  apiUrl = environment.apiUrl;
  
  constructor(
    private httpClient: HttpClient
  ) { }


  ngOnInit(): void {

    this.httpClient.get<User[]>(this.apiUrl + "api-user/").subscribe(list=>{
      this.userList = list;

      });
      
}
}
