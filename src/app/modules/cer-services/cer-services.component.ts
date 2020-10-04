import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Service {
  value: string;
  viewValue: string;
  link: string;
}

@Component({
  selector: 'app-cer-services',
  templateUrl: './cer-services.component.html',
  styleUrls: ['./cer-services.component.scss']
})
export class CerServicesComponent {
  serviceUrls: String[] = [
    '/service',
    '/service/dropbox',
    '/service/research-vm',
    '/service/research-storage',
    '/service/nectar',
    '/service/visualisation',
  ];

  services: Service[] = [
    {value: 'dropbox-0', viewValue:'Dropbox', link: 'dropbox'},
    {value: 'researchvm-1', viewValue:'Research VM', link: 'research-vm'},
    {value: 'researchstorage-2', viewValue:'Research Storage', link: 'research-storage'},
    {value: 'nectar-3', viewValue:'Nectar', link: 'nectar'},
    {value: 'visualisation-4', viewValue:'Visualisation', link: 'visualisation'}
  ];

  constructor(private router: Router) { }

  isServiceBaseRoute(): boolean {
    if (this.serviceUrls.includes(this.router.url)) {
      return true;
    }
    return false;
  }

}
