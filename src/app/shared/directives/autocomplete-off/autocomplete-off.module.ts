import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutocompleteOffDirective} from './autocomplete-off.directive';


@NgModule({
  declarations: [
    AutocompleteOffDirective
  ],
  exports: [
    AutocompleteOffDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AutocompleteOffModule {
}
