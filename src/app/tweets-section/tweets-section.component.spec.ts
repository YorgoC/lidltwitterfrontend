import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsSectionComponent } from './tweets-section.component';

describe('TweetsSectionComponent', () => {
  let component: TweetsSectionComponent;
  let fixture: ComponentFixture<TweetsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
