import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiArticleComponent } from './edit-article.component';

describe('EditArticleComponent', () => {
  let component: EdiArticleComponent;
  let fixture: ComponentFixture<EdiArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdiArticleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
