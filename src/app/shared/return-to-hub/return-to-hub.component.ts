import { Component, OnInit } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-return-to-hub',
  templateUrl: './return-to-hub.component.html',
  styleUrls: ['./return-to-hub.component.scss']
})
export class ReturnToHubComponent implements OnInit {
  researchHubUrl = environment.researchHubUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
