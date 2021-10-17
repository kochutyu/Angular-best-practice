import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoleTemplateComponent } from './user-role-template.component';
import {ForRolesModule} from "../../shared/directives/for-roles/for-roles.module";
import {DebugerModule} from "../../shared/components/debuger/debuger.module";



@NgModule({
  declarations: [
    UserRoleTemplateComponent
  ],
  exports: [
    UserRoleTemplateComponent
  ],
  imports: [
    CommonModule,
    ForRolesModule,
    DebugerModule
  ]
})
export class UserRoleTemplateModule { }
