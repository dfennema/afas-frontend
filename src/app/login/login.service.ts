import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private httpClient = inject(HttpClient)

    login(email: string) {

        const params = new HttpParams()
                    .set('email', email);
 

        this.httpClient
            .get<any>('http://localhost:4200/login', { params }).subscribe(
                response => {
                    console.log(response);
                }
            );  // call naar localhost java, omgeving ook als param
    }

}
