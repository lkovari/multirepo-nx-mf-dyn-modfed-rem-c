import { ChangeDetectionStrategy, Component } from '@angular/core';

const LAST_UPDATE = '2025-03-22 12:00:00';

@Component({
  selector: 'app-remote-c-main',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './remote-c-main.component.html',
  styleUrl: './remote-c-main.component.css',
})
export class RemoteCMainComponent {
  protected readonly lastUpdate = LAST_UPDATE;
}
