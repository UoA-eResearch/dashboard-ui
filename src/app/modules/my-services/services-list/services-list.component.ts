import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  @Input() services;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openService(serviceType: string, serviceId: number) {
    this.router.navigateByUrl(`service/${serviceType}/${serviceId}`);
  }

}
