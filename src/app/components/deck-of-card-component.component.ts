import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Card, DeckOfCards } from '../model';

@Component({
  selector: 'app-deck-of-card-component',
  templateUrl: './deck-of-card-component.component.html',
  styleUrls: ['./deck-of-card-component.component.css']
})
export class DeckOfCardComponentComponent {

  imageSrc = "assets/images/Back.png"

  @Input()
  cardDeck!: DeckOfCards

}
