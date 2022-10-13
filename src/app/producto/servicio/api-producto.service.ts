import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, ProductoConId } from 'src/app/model/producto';
@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {
  private apiUrl = "http://localhost:3000/productos";

  constructor(private http: HttpClient) {

  }
  public addProduct(producto: Producto) {
    return this.http.post(this.apiUrl, producto, {
      headers: {
        'Content-Type': 'application/json;charset-utf8'
      }
    }
    )
  }

  public getAll(){
    return this.http.get(`${this.apiUrl}?_limit=1&_page=1`);
  }
}
