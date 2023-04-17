import { User } from "./user.model"

export interface Card {
    word: string
    definition: string
    remembered: boolean
}

export interface CardSet {
    name: string
    type: string
    creator: User
    public: boolean
    cards: Card[]
}