import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coupon } from "./coupon";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { environment } from "src/environments/environment";
import { MatTable } from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.component.html",
  styleUrls: ["./coupon.component.css"],
})
export class CouponComponent implements OnInit {
  displayedColumns: string[] = [
    // "id",
    "N",
    "nom",
    "description",
    "dateBegin",
    "dateEnd",
    "action",
  ];
  title = "Liste des coupons";
  apiUrl = environment.apiUrl;
  couponList: Coupon[];
  couponForm: FormGroup;
  panelOpenState = false;



  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    private builder: FormBuilder,
    private apiCoupon: HttpClient,
  ) {

  }


  ngOnInit(): void {
    this.Get();
    this.formControle();
  }

  // On affiche la liste des coupons
  Get() {
    this.apiCoupon
      .get<Coupon[]>(this.apiUrl + "api-coupon/")
      .subscribe((list) => {
        this.couponList = list;
        this.table.renderRows();
      });
  }

  // on controle le contenu du formulaire
  formControle() {
    this.couponForm = this.builder.group({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      dateBegin: new FormControl("", [Validators.required]),
      dateEnd: new FormControl("", [Validators.required]),
    });
  }
  //on soummet un formulaire pour ajouter un coupon

  post(form: FormGroup) {
    let toAdd = {
      name: form.value.name,
      description: form.value.description,
      dateBegin: form.value.dateBegin,
      dateEnd: form.value.dateEnd,
    };
    ///console.log('coucou', toAdd);
    if (this.couponForm.valid)
      this.apiCoupon
        .post<Coupon>(this.apiUrl + "api-coupon/create", toAdd)
        .subscribe((coupon) => {
          this.couponList.push(coupon);
          this.table.renderRows();
          form.reset();
        });
    else alert("Formulaire non valide");
  }

  ///TOdoooo
  delete(coupon) {

    this.apiCoupon.delete<Coupon>(this.apiUrl + "api-coupon/delete/" + coupon.idCoupon, coupon)
      .subscribe((responses) => {
        if (responses) {
          let index = this.couponList.indexOf(coupon, 0);
          //verifie la position du coupon
          if (index > -1) {
            this.couponList.splice(index)
            this.table.renderRows();
            console.log('coupon supprimer :', coupon)
          }
        }
      })

  }
  // Toodooo
  update(coupon) {
    this.apiCoupon.put<Coupon>(this.apiUrl + "api-coupon/update/" + coupon.idCoupon, coupon)
      .subscribe((resp) => {
        if (resp) {
          let index = this.couponList.indexOf(coupon, 0);
          if (index > -1) {
            // this.couponList.reduce(index)
            this.table.renderRows();
          }
        }
      })
  }

}
