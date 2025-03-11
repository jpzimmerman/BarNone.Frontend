import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading: boolean = false;
  constructor() {}

  getLoading = () => this.isLoading;

  setLoading = (loading: boolean) => (this.isLoading = loading);
}
