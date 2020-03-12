import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Article5Page } from './article5.page';

describe('Article5Page', () => {
  let component: Article5Page;
  let fixture: ComponentFixture<Article5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Article5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
