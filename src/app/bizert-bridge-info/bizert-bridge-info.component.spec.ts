import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizertBridgeInfoComponent } from './bizert-bridge-info.component';

describe('BizertBridgeInfoComponent', () => {
  let component: BizertBridgeInfoComponent;
  let fixture: ComponentFixture<BizertBridgeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizertBridgeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizertBridgeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
