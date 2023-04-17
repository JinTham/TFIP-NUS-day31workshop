
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

const SUITS = ["Heart","Spade","Diamond","Club"]
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
    }

    shuffle() {
        for (let k=0;k<this.deckList.length;k++) {
            let index = this.randNum()
            let ori = this.deckList[k]
            this.deckList[k] = this.deckList[index]
            this.deckList[index] = ori
        }
    }

    private randNum(): number {
        // return any number from 1 to 13 inclusive both sides
        return Math.floor((Math.random()*13)+1)
    }
}