import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingListComponent } from './ring-list.component';

describe('RingListComponent', () => {
  let component: RingListComponent;
  let fixture: ComponentFixture<RingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
