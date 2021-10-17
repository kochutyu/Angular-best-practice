import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dinamic-template',
  templateUrl: './dinamic-template.component.html',
  styleUrls: ['./dinamic-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinamicTemplateComponent {
  // @ts-ignore
  public addUserFormArray: FormArray;

  // @ts-ignore
  public editUserFormArray: FormArray;

  /*** Data controls **/
  private addUserLimit = 3;
  private editUserLimit = 2;


  constructor(
    private fb: FormBuilder
  ) {
    this.initUserAddFormArray();
    this.initUserEditFormGroup();
  }

  private initUserAddFormArray(): void {
    this.addUserFormArray = this.fb.array([]);
    for (let i = 0; i < this.addUserLimit; i++) {
      this.addUserFormArray.push(this.getDefaultUserControl());
    }
    this.addUserFormArray.valueChanges.subscribe(console.log);
  }

  private initUserEditFormGroup(): void {
    this.editUserFormArray = this.fb.array([]);
    for (let i = 0; i < this.editUserLimit; i++) {
      this.editUserFormArray.push(this.getDefaultUserControl());
    }
    this.editUserFormArray.valueChanges.subscribe(console.log);
  }

  private getDefaultUserControl(): AbstractControl {
    return this.fb.group({
      name: this.fb.control(''),
      surname: this.fb.control(''),
      age: this.fb.control(0),
    });
  }

}
