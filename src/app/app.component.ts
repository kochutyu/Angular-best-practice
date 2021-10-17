import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {RoleEnum} from "./core/enums/roles";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.setUser({role: RoleEnum.ADMIN});
  }
}
