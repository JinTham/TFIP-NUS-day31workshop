import { Component, Input, Output } from '@angular/core';
import { Card, DeckOfCards, Player } from '../model';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent {

  @Input()
  player!: Player

  @Output()
  onDrawCard = new Subject<string>()

  drawACard() {
    this.onDrawCard.next(this.player.name)
  }

}
