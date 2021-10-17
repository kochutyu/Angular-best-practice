import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-empty-directive-example',
  templateUrl: './empty-directive-example.component.html',
  styleUrls: ['./empty-directive-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyDirectiveExampleComponent {

  public testData = [
    {
      value: ''
    },
    {
      value: 'string'
    },
    {
      value: 0
    },
    {
      value: 10
    },
    {
      value: {
        body: 'Hello world',
        statusCode: 200
      }
    },
    {
      value: null
    },
    {
      value: ['hello', 'world', 'string']
    },
    {
      value: [1, 2, 3]
    },
  ];

}
