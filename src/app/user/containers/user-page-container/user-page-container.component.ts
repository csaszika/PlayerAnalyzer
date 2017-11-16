import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromUser from '../../reducers/user';
import {User} from "../../types/user";
import {GetUsers, UserSelected} from "../../actions/user/user";

@Component({
  selector: 'app-user-page-container',
  templateUrl: './user-page-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageContainerComponent implements OnInit {

  showDialog: boolean;
  saveButtonEnabled: boolean;
  newUser: User = {id: null, userName: '', sso: '', age: null};
  selectedUser: User;
  users$: Observable<User[]>;

  constructor(private store: Store<fromUser.UserState>) {
    this.users$ = this.store.select(fromUser.getUserList);
  }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.saveButtonEnabled = false;
    this.selectedUser = null;
    this.users$.subscribe(users => {
      console.log(users);
    })
  }

  onSaveEditedUser() {
    // this.store.dispatch(new AddUser(this.newUser));
    this.showDialog = false;
  }

  showDialogToAdd() {
    this.selectedUser = null;
    this.newUser = {id: null, userName: '', sso: '', age: null} as User;
    this.showDialog = true;
  }

  onRowSelect(event) {
    //a solution to modify child and user state, I think we can do it in one thread
    // this.store.dispatch(new GetChildren(this.selectedUser.id));
    this.store.dispatch(new UserSelected(this.selectedUser));
  }

  onUserChange(user: User) {
    // this.store.dispatch(new UpdateEditedUser(user));
  }
}
