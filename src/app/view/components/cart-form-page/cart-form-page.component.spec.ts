import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFormPageComponent } from './cart-form-page.component';

describe('CartFormPageComponent', () => {
  let component: CartFormPageComponent;
  let fixture: ComponentFixture<CartFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
