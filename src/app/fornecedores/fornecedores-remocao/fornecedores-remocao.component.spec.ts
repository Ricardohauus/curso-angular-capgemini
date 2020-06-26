import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresRemocaoComponent } from './fornecedores-remocao.component';

describe('FornecedoresRemocaoComponent', () => {
  let component: FornecedoresRemocaoComponent;
  let fixture: ComponentFixture<FornecedoresRemocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedoresRemocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedoresRemocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
