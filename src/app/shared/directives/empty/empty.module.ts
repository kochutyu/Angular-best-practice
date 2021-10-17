import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmptyDirective} from './empty.directive';
import {InsertValueModule} from "../../components/insert-value/insert-value.module";


@NgModule({
  declarations: [
    EmptyDirective
  ],
  exports: [
    EmptyDirective
  ],
  imports: [
    CommonModule, InsertValueModule
  ]
})
export class EmptyModule {
}
