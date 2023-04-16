export interface Card {
    word: string
    definition: string
    remembered: boolean
}

export interface CardSet {
    name: string
    type: string
    public: boolean
    cards: Card[]
}