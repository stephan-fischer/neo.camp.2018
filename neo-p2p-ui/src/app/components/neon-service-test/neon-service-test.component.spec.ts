import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonServiceTestComponent } from './neon-service-test.component';

describe('NeonServiceTestComponent', () => {
  let component: NeonServiceTestComponent;
  let fixture: ComponentFixture<NeonServiceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeonServiceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
