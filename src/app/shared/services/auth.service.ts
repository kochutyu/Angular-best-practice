import {Injectable} from '@angular/core';
import {UserRoleType} from "../../core/enums/roles";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {filter} from "rxjs/operators";

export interface IUser {
  role?: UserRoleType;
}

type UserResponse = IUser;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new BehaviorSubject<UserResponse>({});
  private userChange$ = new Subject<void>();

  constructor() {
  }

  public setUser(user: IUser): void {
    this.user$.next(user);
    this.userChange$.next();
  }

  public getUser(): UserResponse {
    return this.user$.getValue();
  }

  public getUser$(): Observable<UserResponse> {
    return this.user$.asObservable().pipe(
      filter(user => !!user)
    );
  }

  public getUserChange$(): Observable<void> {
    return this.userChange$.asObservable();
  }
}
