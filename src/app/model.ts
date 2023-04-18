
export class Card {
    suit:string
    rank:string
    value:number
    imageIdx: number

    constructor(suit:string, rank:string, value:number, imageIdx:number) {
        this.suit = suit
        this.rank = rank
        this.value = value
        this.imageIdx = imageIdx
    }
}

export interface Player {
    name: string
    hand: Card[]
}

const SUITS = ["Heart","Spade","Diamond","Clover"]
const RANKS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const VALUES= [1,2,3,4,5,6,7,8,9,10,10,10,10]

export class DeckOfCards {

    deckList:Card[] = []

    constructor() {
        for (let i=0;i<SUITS.length;i++){
            for (let j=0;j<RANKS.length;j++){;
                this.deckList.push({
                    suit:SUITS[i],
                    rank:RANKS[j],
                    value:VALUES[j],
                    imageIdx:VALUES[j]+1
                });
            }
        }
        this.shuffle()
    }

    shuffle() {
        for (let k=0;k<this.deckList.length;k++) {
            let index = this.randNum(this.deckList.length)
            let ori = this.deckList[k]
            this.deckList[k] = this.deckList[index]
            this.deckList[index] = ori
        }
    }

    deal(): Card {
        return this.deckList.splice(0,1)[0]
    }

    private randNum(size: number): number {
        return Math.floor((Math.random()*size))
    }
}