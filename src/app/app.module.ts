import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WrapperContentModule} from "./shared/components/wrapper-content/wrapper-content.module";
import {EmptyDirectiveExampleModule} from "./examples/empty-directive-example/empty-directive-example.module";
import {DividerModule} from "./shared/components/divider/divider.module";
import {UserRoleTemplateModule} from "./examples/user-role-template/user-role-template.module";
import {DinamicTemplateModule} from "./examples/dinamic-template/dinamic-template.module";
import {DinamicFormModule} from "./examples/dinamic-form/dinamic-form.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WrapperContentModule,
    EmptyDirectiveExampleModule,
    DividerModule,
    UserRoleTemplateModule,
    DinamicTemplateModule,
    DinamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
