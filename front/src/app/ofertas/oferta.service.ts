import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Oferta } from './oferta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  entity_url = environment.REST_API_URL + 'ofertas';

  constructor(private http: HttpClient) {}
  

  getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.entity_url);
  }
  getOfertaById(oferta_id: string): Observable<Oferta> {
    return this.http.get<Oferta>(this.entity_url + '/' + oferta_id);
  }

  addOferta(oferta: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(this.entity_url, oferta);
  }

  updateOferta(oferta_id: string, oferta: Oferta): Observable<{}> {
    return this.http.put<Oferta>(this.entity_url + '/' + oferta_id, oferta);
  }

  deleteOferta(oferta_id: string): Observable<{}> {
    return this.http.delete<Oferta>(this.entity_url + '/' + oferta_id);
  }

}
