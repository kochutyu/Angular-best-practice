import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-insert-value',
  templateUrl: './insert-value.component.html',
  styleUrls: ['./insert-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsertValueComponent implements OnChanges {

  @Input() valueRef: any;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cdr.markForCheck();
  }

}
