import { Injectable } from "@angular/core";
import { API_ROOT_URL } from "../app.config";
import { CardSet } from "../models";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CardSetService {
    private baseUrl = API_ROOT_URL + '/card-set'

    constructor(
        private http: HttpClient
    ) {}

    requestPublicSet(): Observable<CardSet[]> {
        return this.http.get<CardSet[]>(this.baseUrl + '/public')
    }

    requestPrivateCard(userId: string): Observable<CardSet[]> {
        return this.http.get<CardSet[]>(this.baseUrl + '/' + userId)
    }
}