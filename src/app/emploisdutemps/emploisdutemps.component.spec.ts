import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploisdutempsComponent } from './emploisdutemps.component';

describe('EmploisdutempsComponent', () => {
  let component: EmploisdutempsComponent;
  let fixture: ComponentFixture<EmploisdutempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploisdutempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploisdutempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
