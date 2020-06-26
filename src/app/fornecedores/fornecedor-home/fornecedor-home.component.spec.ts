import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorHomeComponent } from './fornecedor-home.component';

describe('FornecedorHomeComponent', () => {
  let component: FornecedorHomeComponent;
  let fixture: ComponentFixture<FornecedorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
