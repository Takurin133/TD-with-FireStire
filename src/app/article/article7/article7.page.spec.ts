import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Article7Page } from './article7.page';

describe('Article7Page', () => {
  let component: Article7Page;
  let fixture: ComponentFixture<Article7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Article7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
