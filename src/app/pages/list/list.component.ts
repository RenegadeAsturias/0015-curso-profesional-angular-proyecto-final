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

	constructor(private cardService: CardService) { }

	ngOnInit(): void {
		this.cardService.getCards().subscribe((res) => {
			console.log(res);
			this.cards = res;
		});
	}

}
