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

  // Implementación que reutiliza la función
  // y recibe también un parámetro 'name' para la búsqueda de cartas
  getCards(name: string | null, offset = 0) {
    const params: any = {
      num: 100,
      offset: offset,
    };
    if (name) params.fname = name;
    return this.http.get<Card[]>(this.API_URL, { params }).pipe(
      map( (res: any) => res.data )
    );
  }

  // Obtenemos la carta a partir del 'id' de la URL
  getCard(id: string) {
    const params = { id };
    return this.http
      .get(this.API_URL, {params})
      .pipe(map((res: any) => res.data[0]));
  }

  /**
  getCards(offset: any) {
    // Prueba sin parámetros y obteníamos todas la cartas:
		// return this.http.get<Card[]>(this.API_URL);

    // Ahora obtenemos las cartas de cien en cien:
    const params = {
      num: 100,
      offset: offset,
    };

    /// Con esto obteníamos: 'data' y 'meta'
      {data: Array(100), meta: {…}}
    return this.http.get<Card[]>(this.API_URL, { params });

    // Eliminamos 'meta' de los resultados
    return this.http.get<Card[]>(this.API_URL, { params }).pipe(
      map( (res: any) => res.data )
    );

	} */

}
