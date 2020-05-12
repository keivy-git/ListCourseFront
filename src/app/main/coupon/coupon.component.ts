import { Component, OnInit, ViewChild } from "@angular/core";
import { Coupon } from "./coupon";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { MatTable } from "@angular/material/table";
import { CouponService } from './service/coupon.service';

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
  couponList: Coupon[];
  couponForm: FormGroup;
  panelOpenState = false;



  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(
    private builder: FormBuilder,
    private couponService: CouponService,
  ) {

  }


  ngOnInit(): void {
    this.get();
    this.formControle();
  }

  // On affiche la liste des coupons
  get() {
    this.couponService.get()
      .subscribe((list) => {
        this.couponList = list;
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
    if (this.couponForm.valid) {
      this.couponService.post(toAdd)
        .subscribe((coupon) => {
          this.couponList.push(coupon);
          this.table.renderRows();
          form.reset();
        });
    } else {
      alert("Formulaire non valide");
    }
  }

  ///TOdoooo
  delete(coupon) {

    this.couponService.delete(coupon)
      .subscribe((responses) => {
        if (responses) {
          let index = this.couponList.indexOf(coupon, 0);
          //verifie la position du coupon
          if (index > -1) {
            this.couponList.splice(index)
            this.table.renderRows();
          }
        }
      })

  }
  // Toodooo
  update(coupon) {
    this.couponService.update(coupon)
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
