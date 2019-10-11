import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { OfertaAddComponent } from './oferta-add/oferta-add.component';
import { OfertaEditComponent } from './oferta-edit/oferta-edit.component';
import { OfertaDetailComponent } from './oferta-detail/oferta-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfertasRoutingModule
  ],
  declarations: [ListOfertasComponent, OfertaDetailComponent ,OfertaAddComponent, OfertaEditComponent]
})
export class OfertasModule { }
