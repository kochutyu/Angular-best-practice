import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinamicFormComponent } from './dinamic-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DebugerModule} from "../../shared/components/debuger/debuger.module";



@NgModule({
  declarations: [
    DinamicFormComponent
  ],
  exports: [
    DinamicFormComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DebugerModule
    ]
})
export class DinamicFormModule { }
