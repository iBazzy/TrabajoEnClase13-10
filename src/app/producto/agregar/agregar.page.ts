import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  ProductoForm : FormGroup;
  constructor(private builder: FormBuilder) {
    this.ProductoForm= this.builder.group({

      nombre: new FormControl('hola',[Validators.minLength(3),Validators.maxLength(10),Validators.required] ),
      precio: new FormControl('',[Validators.required]),
      imagen: new FormControl('',[Validators.required]),
      detalle: new FormControl('',[Validators.minLength(5),Validators.maxLength(45)]),
      stock: new FormControl('',[Validators.required]),


    }
    )
   }



  ngOnInit() {
  }
  public AgregarProduct(){

  }
}
