import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryVouchersIndexComponent } from './entry-vouchers-index.component';

describe('EntryVouchersIndexComponent', () => {
  let component: EntryVouchersIndexComponent;
  let fixture: ComponentFixture<EntryVouchersIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryVouchersIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryVouchersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
