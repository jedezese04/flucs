import { Injectable } from "@angular/core";
import { API_ROOT_URL } from "../app.config";
import { CardSet } from "../models";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

type CardSetList = Array<Omit<CardSet, 'cards'>>

@Injectable({
    providedIn: 'root'
})
export class CardSetService {
    private baseUrl = API_ROOT_URL + '/card-set'

    constructor(
        private http: HttpClient
    ) {}

    requestPublicSet(): Observable<CardSetList> {
        return this.http.get<CardSetList>(this.baseUrl + '/public')
    }
}