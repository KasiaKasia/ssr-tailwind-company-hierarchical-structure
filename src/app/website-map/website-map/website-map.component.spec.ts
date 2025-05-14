import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMapComponent } from './website-map.component';

describe('WebsiteMapComponent', () => {
  let component: WebsiteMapComponent;
  let fixture: ComponentFixture<WebsiteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
