import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiProductoService } from './producto/servicio/api-producto.service';
@NgModule({
  declarations: [AppComponent], //todos los componentes
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule], //todos los modulos
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }], //todos los servicios , pipe
  bootstrap: [AppComponent],
})
export class AppModule {}
