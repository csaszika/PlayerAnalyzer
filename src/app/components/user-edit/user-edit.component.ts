import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {User} from "../../types/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnChanges {

  @Input() selectedUser: User;

  @Input() saveButtonEnabled: boolean;

  @Output() save = new EventEmitter<User>();

  @Output() userChanges: Observable<User>;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      userName: ['x', Validators.minLength(3)],
      sso: ['', Validators.minLength(9)],
      age: ''});
    this.userChanges = this.form.valueChanges;
  }

  onSave() {
    this.save.emit(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedUser) {
      const user = changes.selectedUser.currentValue || {id: '', userName: '', sso: null, age: null};
      this.form.patchValue(user);
    }
  }
}
