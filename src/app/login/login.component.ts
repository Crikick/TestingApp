import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 employeeForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm=new FormGroup({
      InputEmail:new FormControl(),
      InputEmail1:new FormControl(),
      Check1:new FormControl()
    });
  }

  onSubmit()
  {
    alert("Hiii dear...");
    console.log(this.employeeForm.value);
  }

}
