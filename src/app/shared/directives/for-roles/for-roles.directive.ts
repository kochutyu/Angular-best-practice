import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {RoleEnum} from "../../../core/enums/roles";
import {AuthService, IUser} from "../../services/auth.service";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Directive({
  selector: '[forRoles]'
})
export class ForRolesDirective implements OnDestroy {

  /*** Component data **/
  private _isActive = false;

  /*** Controls **/
  private destroyDirective = new Subject<void>();

  @Input() set forRoles(roles: RoleEnum[]) {
    this.getUser$().subscribe(user => {
      this.viewContainerRef.clear();
      this._isActive = roles.some(role => role === user.role);
      if (this._isActive) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    })
  }

  @Input() set forRolesElse(template: TemplateRef<any>) {
    this.getUser$().subscribe(user => {
      if (!this._isActive) {
        this.viewContainerRef.createEmbeddedView(template);
      }
    })
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) {
  }

  private getUser$(): Observable<IUser> {
    return this.authService.getUser$().pipe(
      takeUntil(this.destroyDirective)
    )
  }

  ngOnDestroy() {
    this.destroyDirective.next();
    this.destroyDirective.complete();
  }

}
