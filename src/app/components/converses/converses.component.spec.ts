import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversesComponent } from './converses.component';

describe('ConversesComponent', () => {
  let component: ConversesComponent;
  let fixture: ComponentFixture<ConversesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
