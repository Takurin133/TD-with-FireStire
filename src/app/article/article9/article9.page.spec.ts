import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Article9Page } from './article9.page';

describe('Article9Page', () => {
  let component: Article9Page;
  let fixture: ComponentFixture<Article9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Article9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
