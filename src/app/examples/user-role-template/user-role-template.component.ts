import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {RoleEnum, UserRoleType} from "../../core/enums/roles";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-user-role-template',
  templateUrl: './user-role-template.component.html',
  styleUrls: ['./user-role-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRoleTemplateComponent {
  public isAdminRole = [RoleEnum.ADMIN];
  public isManagerRole = [RoleEnum.MANAGER];
  public isUserRole = [RoleEnum.USER];
  public isAllRole = [RoleEnum.ADMIN, RoleEnum.MANAGER, RoleEnum.USER];

  constructor(public authService: AuthService, private cdr: ChangeDetectorRef) {
  }

  public setRole(role: UserRoleType): void {
    this.authService.setUser({role});
    this.cdr.markForCheck();
  }
}
