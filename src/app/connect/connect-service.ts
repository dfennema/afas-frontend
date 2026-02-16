import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// enum Connectie {
//   acc = "https://12345.restaccept.afas.online/profitrestservices",
//   prd = "https://12345.rest.afas.online/profitrestservices",
//   tst = "https://12345.resttest.afas.online/profitrestservices",
// }

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  private httpClient = inject(HttpClient)

  fetchData(omgeving: string, bedrijf: string, token: string) {

    const options = omgeving ?
      {
        params: new HttpParams()
          .set('omgeving', omgeving)
          .set('bedrijf', bedrijf)
          .set('token', token)
      } : {}

    this.httpClient
      .get<any>('http://localhost:800/');  // call naar localhost java, omgeving ook als param
  }

}
