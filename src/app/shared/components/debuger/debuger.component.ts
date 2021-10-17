import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-debuger',
  templateUrl: './debuger.component.html',
  styleUrls: ['./debuger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebugerComponent {
  /*** Input data **/
  @Input() data: unknown;
}
