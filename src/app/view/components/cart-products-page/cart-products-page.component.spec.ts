import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductsPageComponent } from './cart-products-page.component';

describe('CartProductsPageComponent', () => {
  let component: CartProductsPageComponent;
  let fixture: ComponentFixture<CartProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
