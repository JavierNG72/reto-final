import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {
  errorMessage: string;
  ofertas: Oferta[];

  constructor(private router: Router, private ofertaService: OfertaService) { 
  }

  ngOnInit() {
    this.ofertaService.getOfertas().subscribe(
      ofertas => this.ofertas = ofertas,
      error => this.errorMessage = <any> error);
  }

  onSelect(oferta: Oferta) {
    this.router.navigate(['/ofertas', oferta.id]);
  }

  addOferta() {
    this.router.navigate(['/ofertas/add']);
  }

}