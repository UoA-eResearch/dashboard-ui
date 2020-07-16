import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashBoardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { 
            title: 'My Projects',
            content: 'View and manage your projects.',
            routerLink: '/my-projects',
            cols: 1,
            rows: 1
          },
          { 
            title: 'My Services',
            content: 'View and manage your VMs, storage allocations etc.',
            routerLink: '/my-services',
            cols: 1,
            rows: 1
          },
          { 
            title: 'Get More Stuff',
            content: 'Get a VM, storage etc.',
            routerLink: '/getstuff',
            cols: 1,
            rows: 1
          },
          { 
            title: 'Instruction Manual',
            content: 'Get help with all the things, FAQs, handy hints.',
            routerLink: '/help',
            cols: 1,
            rows: 1
          }
        ];
      }

      return [
        { 
          title: 'My Projects',
          content: 'View and manage your projects.',
          routerLink: '/my-projects',
          cols: 2,
          rows: 1
        },
        { 
          title: 'My Services',
          content: 'View and manage your VMs, storage allocations etc.',
          routerLink: '/my-services',
          cols: 1,
          rows: 1
        },
        { 
          title: 'Get More Stuff',
          content: 'Get a VM, storage etc.',
          routerLink: '/getstuff',
          cols: 1,
          rows: 2
        },
        { 
          title: 'Instruction Manual',
          content: 'Get help with all the things, FAQs, handy hints.',
          routerLink: '/help',
          cols: 1,
          rows: 1
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
