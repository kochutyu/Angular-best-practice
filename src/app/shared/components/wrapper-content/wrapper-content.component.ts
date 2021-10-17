import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-wrapper-content',
  templateUrl: './wrapper-content.component.html',
  styleUrls: ['./wrapper-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperContentComponent {
  /*** Component controls **/
  @Input() title = '';
}
