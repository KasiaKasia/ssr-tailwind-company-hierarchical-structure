import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NavbarWcagComponent } from './core/navbar-wcag/navbar-wcag.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      declarations: [
        AppComponent,
        NavbarWcagComponent,
        NavbarComponent,
        FooterComponent,
        RouterOutlet
      ],
    }).compileComponents();
  });
  fixture = TestBed.createComponent(AppComponent);

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render <app-navbar-wcag>', () => {
    const wcagNavbar = fixture.debugElement.query(By.css('app-navbar-wcag'));
    expect(wcagNavbar).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ssr-tailwind-company-hierarchical-structure');
  });
});
