import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructuredialogComponent } from './datastructuredialog.component';

describe('DatastructuredialogComponent', () => {
  let component: DatastructuredialogComponent;
  let fixture: ComponentFixture<DatastructuredialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastructuredialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastructuredialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
