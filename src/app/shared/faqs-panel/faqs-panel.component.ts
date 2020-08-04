import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'faqs-panel',
  templateUrl: './faqs-panel.component.html',
  styleUrls: ['./faqs-panel.component.scss']
})
export class FaqsPanelComponent implements OnInit {
  faqs = [
    {
      title: 'Virtual Machine FAQs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo pretium leo, vitae fringilla velit iaculis quis. Nulla finibus magna ac odio commodo, in suscipit turpis euismod.',
      faqs: [
        {
          question: 'How do I grant someone access to my VM?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          question: 'Lorem ipsum dolor sit amet?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    },
    {
      title: 'Dropbox FAQs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo pretium leo, vitae fringilla velit iaculis quis. Nulla finibus magna ac odio commodo, in suscipit turpis euismod.',
      faqs: [
        {
          question: 'How do I grant someone access to my DropBox?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          question: 'Lorem ipsum dolor sit amet?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
