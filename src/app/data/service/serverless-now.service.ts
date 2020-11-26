import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServerlessNowService {
  private static requestServiceUrl = 'serviceRequest';
  private static hostname = environment.serverlessNowUrl;

  constructor(private http: HttpClient) { }

  requestService(serviceName: string, body: any) {
    const options = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Host": "apigw.sandbox.amazon.auckland.ac.nz",
        "Accept-Encoding": "gzip, deflate, br",
      }
    }
    return this.http.post(ServerlessNowService.hostname + ServerlessNowService.requestServiceUrl + '/' + serviceName, body, options);
  }
}
