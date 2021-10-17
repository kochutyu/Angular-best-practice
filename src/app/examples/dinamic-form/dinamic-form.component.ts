import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinamicFormComponent {

  public users = [
    {
      name: 'Yura',
      surname: 'Kochut',
      age: 20
    },
    {
      name: 'Volodymir',
      surname: 'Yemnish',
      age: 20
    },
  ];

  // @ts-ignore
  public usersFormArray: FormArray;

  constructor(
    private fb: FormBuilder
  ) {
    this.initUserTable();
  }

  public addNewUser(): void {
    const formGroup = this.fb.group({
      name: this.fb.control(''),
      surname: this.fb.control(''),
      age: this.fb.control(''),
    });
    const formControl = this.fb.control({
      formGroup,
      state: 'add'
    });
    this.usersFormArray.controls.unshift(formControl);
  }

  public addUser(index: number, formGroup: FormGroup): void {
    const control = this.fb.control({
      formGroup,
      state: 'view'
    });
    this.usersFormArray.setControl(index, control);
    // TODO: Provide Api for create user
  }

  public saveUser(index: any, formGroup: FormGroup) {
    const control = this.fb.control({
      formGroup,
      state: 'view'
    });
    this.usersFormArray.setControl(index, control);
    // TODO: Provide Api for edit user
  }

  public editUser(index: number, formGroup: FormGroup): void {
    const {name, surname, age} = formGroup.value;
    formGroup = this.fb.group({
      name: this.fb.control(name),
      surname: this.fb.control(surname),
      age: this.fb.control(age)
    })
    const control = this.fb.control({
      formGroup,
      state: 'edit'
    });
    this.usersFormArray.setControl(index, control);
    // TODO: Provide Api for edit user
  }

  public removeUser(index: number): void {
    this.usersFormArray.removeAt(index);
  }

  public deleteUser(index: number): void {
    this.usersFormArray.removeAt(index);
    // TODO: Provide Api for delete user
  }

  private initUserTable(): void {
    this.usersFormArray = this.fb.array([]);
    for (const user of this.users) {
      const formGroup = this.fb.group({
        name: this.fb.control(user.name),
        surname: this.fb.control(user.surname),
        age: this.fb.control(user.age),
      })
      const formControl = this.fb.control({
        formGroup,
        state: 'view'
      });
      this.usersFormArray.push(formControl);
    }
    this.usersFormArray.valueChanges.subscribe(console.log);
  }

}
