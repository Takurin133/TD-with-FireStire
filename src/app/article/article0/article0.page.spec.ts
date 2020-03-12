import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Article0Page } from './article0.page';

describe('Article0Page', () => {
  let component: Article0Page;
  let fixture: ComponentFixture<Article0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Article0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
