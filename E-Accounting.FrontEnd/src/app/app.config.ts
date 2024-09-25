import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { provideStore, StoreModule } from '@ngrx/store'
import { changeLoading } from './Common/State/loading.actions';
import { loadingReducer } from './Common/State/loading-reducer';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), importProvidersFrom(BrowserModule, SweetAlert2Module.forRoot(), StoreModule.forRoot({loading: loadingReducer})), provideStore()]
};
