import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingList } from './shopping-list';
import { environment } from 'src/environments/environment';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [
    "nom",
    "action",
  ];
  title = "Liste de course";
  apiUrl = environment.apiUrl;
  shoppingList: ShoppingList[];
  shoppingForm: FormGroup;

  // toppings = new FormControl();
  // toppingList: string[] = ['Fromage', 'champignon', 'oignon', 'Saucisse', 'Tomate'];


  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    private builder: FormBuilder,
    private shopListService: ShoppingListService,
  ) { }

  ngOnInit(): void {
    this.Get();
    this.formControle();
  }

  Get() {
    this.shopListService.get()
      .subscribe((list) => {
        this.shoppingList = list;
      });
  }

  // on controle le contenu du formulaire
  formControle() {
    this.shoppingForm = this.builder.group({
      name: new FormControl("", [Validators.required]),
    });
  }
  post(form: FormGroup) {
    let toAdd = {
      name: form.value.name,
    };
    if (this.shoppingForm.valid)
      this
        .shopListService.post(toAdd)
        .subscribe((list) => {
          this.shoppingList.push(list);
          this.table.renderRows();
          form.reset();
        });

  }

  delete(shopping) {
    this.shopListService.delete(shopping)
      .subscribe((responses) => {
        if (responses) {
          let index = this.shoppingList.indexOf(shopping, 0);
          //verifie la position du coupon
          if (index > -1) {
            this.shoppingList.splice(index)
            this.table.renderRows();
          }
        }
      })

  }



}


