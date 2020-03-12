import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Article2Page } from './article2.page';

describe('Article2Page', () => {
  let component: Article2Page;
  let fixture: ComponentFixture<Article2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Article2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
