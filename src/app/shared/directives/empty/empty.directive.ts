import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {InsertValueComponent} from "../../components/insert-value/insert-value.component";

type ValueType = string | number | Array<string | number> | object | null;

@Directive({
  selector: 'ng-container[empty]'
})
export class EmptyDirective implements OnInit, OnChanges {

  private _value: ValueType = null;

  /*** Input data **/
  @Input() set empty(value: ValueType) {
    this._value = value;
    value = this.validate(value);
    this.render(value);
  }

  /*** Controls **/
  @Input() emptyValue = '-';

  constructor(
    private el: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    this.initData();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initData();
  }

  private validate(value: ValueType): ValueType {
    if (!!value) {
      return value;
    } else {

      if (typeof value === 'number') {
        return value;
      }

      return this.emptyValue;
    }
  }

  private render(value: any): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InsertValueComponent);
    this.viewContainerRef.clear();
    const component = this.viewContainerRef.createComponent(componentFactory);
    const componentRef = component.instance;
    componentRef.valueRef = value;
  }

  private initData(): void {
    this.empty = this._value;
  }
}
