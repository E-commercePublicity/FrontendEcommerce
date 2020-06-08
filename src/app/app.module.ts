import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
/* rutas */
import {routing, appRoutingProviders} from './app.routing'
/* componentes */

import { AppComponent } from './app.component';
import { TecnologiaComponent } from './components/tecnologia.component';
import { HogarComponent } from './components/hogar.component';
import { VestuarioComponent } from './components/vestuario.component';

@NgModule({
  declarations: [
   AppComponent,
   TecnologiaComponent,
   HogarComponent,
   VestuarioComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
