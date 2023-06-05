import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/interfaces/card.interfaces'
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
	cards: Card[] = [];
	offset = 0;
  cardTestFormControl = new FormControl(''); // Para recoger el filtro de búsqueda de cartas
	constructor(private cardService: CardService) { }
	ngOnInit(): void {
    this.cardTestFormControl.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe( res => {
			console.log(res);
      this.cards = [];
      this.searchCards(res);
		});
		this.searchCards();
	}
	onScroll() {
		console.log("scrolled!!");
		this.offset += 100;
		this.searchCards();
	}
	searchCards(cardName: string | null = null) {
		this.cardService.getCards(cardName, this.offset).subscribe((res) => {
			console.log(res);
			this.cards = [...this.cards, ...res];
		});
	}
}
function dobounceTime(arg0: number): import("rxjs").OperatorFunction<string | null, unknown> {
  throw new Error('Function not implemented.');
}

