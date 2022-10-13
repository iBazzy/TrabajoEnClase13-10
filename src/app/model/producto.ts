export interface Producto {
  imagen: string;
  nombre :string;
  detalle: string;
  precio: number;
  stock: number;
}

export interface ProductoConId extends Producto{
  id: number;
}
