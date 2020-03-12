import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Article4Page } from './article4.page';

describe('Article4Page', () => {
  let component: Article4Page;
  let fixture: ComponentFixture<Article4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Article4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
