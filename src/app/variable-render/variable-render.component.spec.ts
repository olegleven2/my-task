import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableRenderComponent } from './variable-render.component';

describe('VariableRenderComponent', () => {
  let component: VariableRenderComponent;
  let fixture: ComponentFixture<VariableRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
