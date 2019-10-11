import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { OfertaAddComponent } from './oferta-add/oferta-add.component';
import { OfertaEditComponent } from './oferta-edit/oferta-edit.component';
import { OfertaDetailComponent } from './oferta-detail/oferta-detail.component';

const routes: Routes = [
  {path: 'ofertas', component: ListOfertasComponent},
  {path: 'ofertas/add', component: OfertaAddComponent},
  {path: 'ofertas/:id', component: OfertaDetailComponent},
  {path: 'ofertas/:id/edit', component: OfertaEditComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }