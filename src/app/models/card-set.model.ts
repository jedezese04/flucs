export interface Card {
    word: string
    definition: string
}

export interface CardSet {
    name: string
    type: string
    public: boolean
    cards: Card[]
}