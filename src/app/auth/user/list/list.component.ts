import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'prenom', 'nom', 'roles'];


  title = 'Liste des utilisateurs inscrits';
  userList: User[];

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.auth.get().subscribe((list) => {
      this.userList = list;

    });
  }

}

