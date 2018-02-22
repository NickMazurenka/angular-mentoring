import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthReducer } from './store/auth.reducer';
import { LocalStorageSyncReducer } from '../shared-store/local-storage-sync.reducer';
import { AuthEffects } from './store/auth.effects';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LogoComponent } from '../header/logo/logo.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    AngularFontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ]
})
export class AuthModule { }
