import { Injectable } from '@angular/core';

import { StorageService } from '@uoa/auth';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class AppStorageService implements StorageService {

  getItem(key: string): Promise<any> {
    return localforage.getItem(key);
  }

  async setItem(key: string, val: any): Promise<void> {
    await localforage.setItem(key, val);
  }

  async removeItem(key: string): Promise<void> {
    await localforage.removeItem(key);
  }
}
