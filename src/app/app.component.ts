import { Component } from '@angular/core';
import { Card, DeckOfCards, Player } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31workshop';

  players: Player[] = []
  NAMES = ["Eren","Mikasa","Armin"]
  currentPlayer:string = this.NAMES[0]

  cardDeck: DeckOfCards = new DeckOfCards

  constructor() {
    for (let n of this.NAMES) {
      this.players.push({
        name:n,
        hand:[]})
    }
  }

  drawCardForPlayer(name: string) {
    this.currentPlayer = name
    const c = this.cardDeck.deal()
    console.info(`>> drawCardForPlayer: ${name}, card: ${JSON.stringify(c)}`)
    const p = this.players.find(p => p.name == name)
    // @ts-ignore
    p?.hand.push(c)
  }

  newCard() {
    this.drawCardForPlayer(this.currentPlayer)
  }

}
