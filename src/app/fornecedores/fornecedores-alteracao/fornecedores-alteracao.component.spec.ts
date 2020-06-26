import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresAlteracaoComponent } from './fornecedores-alteracao.component';

describe('FornecedoresAlteracaoComponent', () => {
  let component: FornecedoresAlteracaoComponent;
  let fixture: ComponentFixture<FornecedoresAlteracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedoresAlteracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedoresAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
