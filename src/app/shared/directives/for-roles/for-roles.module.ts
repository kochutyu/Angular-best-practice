import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForRolesDirective } from './for-roles.directive';



@NgModule({
    declarations: [
        ForRolesDirective
    ],
    exports: [
        ForRolesDirective
    ],
    imports: [
        CommonModule
    ]
})
export class ForRolesModule { }
