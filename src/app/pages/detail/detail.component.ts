import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Card } from 'src/app/interfaces/card.interfaces';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: string;
  card$!: Observable<Card>;

  constructor(private route: ActivatedRoute, private cardService: CardService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    console.log("id="+this.id);

    this.card$ = this.cardService.getCard(this.id).pipe(tap(console.log));

    /** No utilizaremos la Subscripció sino un Observable:
    this.cardService.getCard(this.id).subscribe( res => {
      console.log(res);
    })
    */
  }

}
