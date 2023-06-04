import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL ='https://db.ygoprodeck.com/api/v7/cardinfo.php';
  constructor(private http: HttpClient) { }

  getCards(offset: any) {
    // Prueba sin parámetros y obteníamos todas la cartas:
		// return this.http.get<Card[]>(this.API_URL);

    // Ahora obtenemos las cartas de cien en cien:
    const params = {
      num: 100,
      offset: offset,
    };

    /** Con esto obteníamos: 'data' y 'meta'
      {data: Array(100), meta: {…}}
    return this.http.get<Card[]>(this.API_URL, { params });
    */

    // Eliminamos 'meta' de los resultados
    return this.http.get<Card[]>(this.API_URL, { params }).pipe(
      map( (res: any) => res.data )
    );

	}

}
