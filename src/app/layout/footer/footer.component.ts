import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  aucklandUniUrl = 'https://auckland.ac.nz';
  eResearchUrl = 'http://eresearch.auckland.ac.nz';
  disclaimerUrl = 'https://www.auckland.ac.nz/en/admin/footer-links/disclaimer.html';

  constructor() { }

  ngOnInit(): void {
  }

  getYear() {
    return format(new Date(), 'yyyy');
  }

}
