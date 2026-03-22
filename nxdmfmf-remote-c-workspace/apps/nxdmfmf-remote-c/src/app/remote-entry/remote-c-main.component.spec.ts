import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteCMainComponent } from './remote-c-main.component';

describe('RemoteCMainComponent', () => {
  let fixture: ComponentFixture<RemoteCMainComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteCMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteCMainComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should render the title', () => {
    const title = compiled.querySelector('.c-remote-entry__title');
    expect(title?.textContent?.trim()).toBe(
      'Angular Nx (multi-repo) Micro-frontend App'
    );
  });

  it('should render the source description', () => {
    const source = compiled.querySelector('.c-remote-entry__source');
    expect(source?.textContent).toContain(
      'This page is loaded from repo: multirepo-nx-mf-dyn-modfed-rem-c'
    );
    expect(source?.textContent).toContain('nxdmfmf-remote-c-workspace');
    expect(source?.textContent).toContain('nxdmfmf-remote-c');
  });

  it('should render the last update date', () => {
    const updated = compiled.querySelector('.c-remote-entry__updated');
    expect(updated?.textContent).toContain('Last update date:');
    expect(updated?.textContent).toContain('2025-03-22 12:00:00');
  });
});
