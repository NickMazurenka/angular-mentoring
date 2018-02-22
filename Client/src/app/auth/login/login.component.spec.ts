import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { AuthReducer } from '../store/auth.reducer';
import { LocalStorageSyncReducer } from '../../shared-store/local-storage-sync.reducer';
import { AuthRoutingModule } from '../auth-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ auth: AuthReducer }, { metaReducers: [LocalStorageSyncReducer] }),
        FormsModule,
        AngularFontAwesomeModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [LoginComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
