import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugerComponent } from './debuger.component';



@NgModule({
    declarations: [
        DebugerComponent
    ],
    exports: [
        DebugerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DebugerModule { }
