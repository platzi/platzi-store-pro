import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsContainer } from './products.container';

xdescribe('ProductsComponent', () => {
  let component: ProductsContainer;
  let fixture: ComponentFixture<ProductsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
