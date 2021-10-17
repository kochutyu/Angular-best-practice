import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicTemplateComponent } from './dinamic-template.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DebugerModule} from "../../shared/components/debuger/debuger.module";
import {DividerModule} from "../../shared/components/divider/divider.module";



@NgModule({
  declarations: [
    DinamicTemplateComponent
  ],
  exports: [
    DinamicTemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DebugerModule,
    DividerModule
  ]
})
export class DinamicTemplateModule { }
