import { TestBed } from '@angular/core/testing';
import * as localforage from 'localforage';
import { AppStorageService } from './app-storage.service';


describe('AppStorageService', () => {
  let service: AppStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call localforage.setItem() when setItem is called', async () => {
    const localforageSpy = spyOn(localforage, 'setItem');
    service.setItem('test', 'value');
    expect(localforageSpy).toHaveBeenCalled();
    expect(localforageSpy).toHaveBeenCalledWith('test', 'value');
  });

  it('should call localforage.removeItem() when removeItem is called', async () => {
    const localforageSpy = spyOn(localforage, 'removeItem');
    service.removeItem('test');
    expect(localforageSpy).toHaveBeenCalled();
    expect(localforageSpy).toHaveBeenCalledWith('test');
  });
});
