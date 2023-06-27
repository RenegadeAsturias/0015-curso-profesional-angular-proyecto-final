import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName'
})
export class MarketNamePipe implements PipeTransform {

  // Para mapear los códigos con una descripción
	markets = [
		{ id: 'cardmarket_price', name: 'Amazon' },
		{ id: 'tcgplayer_price', 	name: 'Cardmarket' },
		{ id: 'ebay_price', 		  name: 'Coolstuff Inc' },
		{ id: 'amazon_price',		  name: 'Ebay' },
		{ id: 'coolstuffinc_price', name: 'TCG Player' },
	]

	transform(value: string): string {
		const market = this.markets.find( m => m.id === value);
		return market?.name || '';
	}

}
