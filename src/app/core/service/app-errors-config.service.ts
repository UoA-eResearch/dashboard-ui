import { Injectable } from '@angular/core';
import { UoaErrorsConfig } from '@uoa/error-pages';

@Injectable({
  providedIn: 'root'
})
export class AppErrorsConfigService extends UoaErrorsConfig {

  constructor() {
    super();

    this.ErrorPageContent['ErrorCode401'] = { 
      title: 'Not Authorized', 
      content: `<p>Sorry, You do not have permission to view this page.</p>
      <p>
        If you believe you are seeing this page in error, contact 
        <a href="mailto:researchdata@auckland.ac.nz" target="_blank">researchdata@auckland.ac.nz</a> (research storage requests) or
        <a href="mailto:research-vm@auckland.ac.nz" target="_blank">research-vm@auckland.ac.nz</a> (research virtual machine requests).
      </p>`
    };

    this.ErrorPageContent['ErrorCode403'] = { 
      title: 'Access Restricted', 
      content: `<p>Sorry, You do not have permission to view this page. Please ensure that you are logged in and try again.</p>
      <p>
        If you still do not have access and believe you are seeing this page in error, contact 
        <a href="mailto:researchdata@auckland.ac.nz" target="_blank">researchdata@auckland.ac.nz</a> (research storage requests) or
        <a href="mailto:research-vm@auckland.ac.nz" target="_blank">research-vm@auckland.ac.nz</a> (research virtual machine requests).
      </p>`
    };

    this.ErrorPageContent['ErrorCode404'] = {
      title: `Page Not Found`,
      content: `Sorry, the page you tried to go to doesn't exist.`,
    };

    this.ErrorPageContent['ErrorCodeDefault'] = {
      title: `Unexpected Error`,
      content: `We’re sorry that you encountered an error with our site. If you require help, please contact
      <a href="mailto:researchdata@auckland.ac.nz" target="_blank">researchdata@auckland.ac.nz</a> (research storage requests) or
      <a href="mailto:research-vm@auckland.ac.nz" target="_blank">research-vm@auckland.ac.nz</a> (research virtual machine requests).`
    }
  }
}
