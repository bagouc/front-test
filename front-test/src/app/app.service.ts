import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppService {

    constructor(private http: HttpClient) { }

    getUser(): Observable<String> {
        return this.http.get<any>("https://randomapi.com/api/lmx9vr2y?key=7PZR-D9OT-I1EC-YQ7F");
    }

    login(model: any): Observable<any> {
        return this.http.post<any>("https://doc.antidot.net/api/authentication/login", model);
    }
}