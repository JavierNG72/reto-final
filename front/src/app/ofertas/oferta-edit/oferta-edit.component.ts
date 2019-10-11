import {Component, OnInit} from '@angular/core';
import {OfertaService} from '../oferta.service';
import {Oferta} from '../oferta';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-oferta-edit',
  templateUrl: './oferta-edit.component.html',
  styleUrls: ['./oferta-edit.component.css']
})
export class OfertaEditComponent implements OnInit {
  oferta: Oferta;
  errorMessage: string; // server error message

  constructor(private ofertaService: OfertaService, private route: ActivatedRoute, private router: Router) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
    const ofertaId = this.route.snapshot.params['id'];
    this.ofertaService.getOfertaById(ofertaId).subscribe(
      oferta => this.oferta = oferta,
      error => this.errorMessage = <any> error);
  }

  onSubmit(oferta: Oferta) {
    var that = this;
    this.ofertaService.updateOferta(oferta.id.toString(), oferta).subscribe(
      res => this.gotoOfertaDetail(oferta),
      error => this.errorMessage = <any> error
    )
  }

  gotoOfertaDetail(oferta: Oferta) {
    this.errorMessage = null;
    this.router.navigate(['/ofertas', oferta.id]);
  }



}

