import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[autocompleteOff]'
})
export class AutocompleteOffDirective implements OnInit, OnChanges {

  /*** Controls **/
  @Input() turnOn = false;

  constructor(
    private el: ElementRef,
    private r: Renderer2
  ) {
  }

  ngOnInit() {
    this.initAutocomplete();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initAutocomplete();
  }

  private initAutocomplete(): void {
    this.r.setAttribute(this.el.nativeElement, 'autocomplete', `${this.turnOn}`);
  }

}
