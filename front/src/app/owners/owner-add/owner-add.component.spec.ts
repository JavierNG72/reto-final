/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/* tslint:disable:no-unused-variable */

/**
 * @author Vitaliy Fedoriv
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {OwnerAddComponent} from './owner-add.component';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {OwnerService} from '../owner.service';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterStub} from '../../testing/router-stubs';
import {Owner} from "../owner";
import {Observable} from "rxjs/Rx";
import {of} from "rxjs/index";

class OwnserServiceStub {

  addOwner(owner: Owner): Observable<Owner> {
    return of(owner)
  }
}

describe('OwnerAddComponent', () => {
  let component: OwnerAddComponent;
  let fixture: ComponentFixture<OwnerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerAddComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        {provide: OwnerService, useClass: OwnserServiceStub},
        {provide: Router, useClass: RouterStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OwnerAddComponent', () => {
    expect(component).toBeTruthy();
  });
});