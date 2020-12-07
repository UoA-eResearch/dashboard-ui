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
    return this.http.post(ServerlessNowService.hostname, body);
  }
}
