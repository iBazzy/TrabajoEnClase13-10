import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'agregar',
    loadChildren: () => import('./producto/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'eliminar',
    loadChildren: () => import('./producto/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./producto/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./producto/listar/listar.module').then( m => m.ListarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
