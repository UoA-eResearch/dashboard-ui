import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServerlessNowService {
  private static hostname = environment.serverlessNowUrl;

  constructor(private http: HttpClient) { }

  requestService(requestType: string, body: any) {
    const options = {
      params: {
        requestType
      }
    }
    return this.http.post(ServerlessNowService.hostname, body, options);
  }
}
