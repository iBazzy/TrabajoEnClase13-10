import { Component, OnInit } from '@angular/core';
import { ApiProductoService } from '../servicio/api-producto.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private productoService : ApiProductoService, private htpp: HttpClient ) { }

  ngOnInit() {
  }

  public mostrarTodo(){
    this.productoService.getAll().subscribe(res=>{
      console.log(res)
    })

  }

}
