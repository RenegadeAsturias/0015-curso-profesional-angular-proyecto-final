import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/interfaces/card.interfaces'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
	cards: Card[] = [];
	offset = 0;
	constructor(private cardService: CardService) { }
	ngOnInit(): void {
		this.searchCards();
	}
	onScroll() {
		console.log("scrolled!!");
		this.offset += 100;
		this.searchCards();
	}
	searchCards() {
		this.cardService.getCards(this.offset).subscribe((res) => {
			console.log(res);
			this.cards = [...this.cards, ...res];
		});
	}
}
