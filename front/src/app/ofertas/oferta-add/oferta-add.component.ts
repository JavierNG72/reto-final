import {Component, OnInit} from '@angular/core';
import {OfertaService} from '../oferta.service';
import {Oferta} from '../oferta';
import {Router} from '@angular/router';

@Component({
  selector: 'app-oferta-add',
  templateUrl: './oferta-add.component.html',
  styleUrls: ['./oferta-add.component.css']
})
export class OfertaAddComponent implements OnInit {

  oferta: Oferta;
  errorMessage: string;

  constructor(private ofertaService: OfertaService, private router: Router) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
  }

  onSubmit(oferta: Oferta) {
    oferta.id = null;
    this.ofertaService.addOferta(oferta).subscribe(
      new_oferta => {
        this.oferta = new_oferta;
        this.gotoOfertasList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoOfertasList() {
    this.router.navigate(['/ofertas']);
  }

}

