import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

type ColorType = 'red' | 'black';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent {
  @Input() color: ColorType = 'black';
}
