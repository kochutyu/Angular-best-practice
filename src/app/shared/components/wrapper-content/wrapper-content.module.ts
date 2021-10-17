import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperContentComponent } from './wrapper-content.component';
import {CapitalizeModule} from "../../pipes/capitalize/capitalize.module";



@NgModule({
    declarations: [
        WrapperContentComponent
    ],
    exports: [
        WrapperContentComponent
    ],
  imports: [
    CommonModule,
    CapitalizeModule
  ]
})
export class WrapperContentModule { }
