import {Component, OnInit} from '@angular/core';
import {OfertaService} from '../oferta.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Oferta} from '../oferta';
import 'rxjs/Rx';


@Component({
  selector: 'app-oferta-detail',
  templateUrl: './oferta-detail.component.html',
  styleUrls: ['./oferta-detail.component.css']
})
export class OfertaDetailComponent implements OnInit {
  errorMessage: string;
  oferta: Oferta;

  constructor(private route: ActivatedRoute, private router: Router, private ofertaService: OfertaService) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
    const ofertaId = this.route.snapshot.params['id'];
    this.ofertaService.getOfertaById(ofertaId).subscribe(
      oferta => this.oferta = oferta,
      error => this.errorMessage = <any> error);
  }

  gotoOfertaList() {
    this.router.navigate(['/oferta']);
  }

  editOferta() {
    this.router.navigate(['/oferta', this.oferta.id, 'edit']);
  }

}

