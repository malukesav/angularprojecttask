import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {

  constructor(public dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(DialogComponent);

}
}
@Component({
  selector: 'app-login',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {}
