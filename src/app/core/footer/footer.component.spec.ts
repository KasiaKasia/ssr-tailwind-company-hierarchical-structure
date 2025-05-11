import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  template: `<div>Scroll Up</div>`
})
class MockScrollUpComponent {}
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [FooterComponent, MockScrollUpComponent]}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});