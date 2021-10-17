import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmptyDirectiveExampleComponent} from "./empty-directive-example.component";
import {EmptyModule} from "../../shared/directives/empty/empty.module";
import {DebugerModule} from "../../shared/components/debuger/debuger.module";


@NgModule({
  declarations: [EmptyDirectiveExampleComponent],
  exports: [
    EmptyDirectiveExampleComponent
  ],
  imports: [
    CommonModule,
    EmptyModule,
    DebugerModule
  ]
})
export class EmptyDirectiveExampleModule {
}
