import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user!: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  userService: any;
  toastr: any;
  sub: any;
  _auth: any;
  router: any;

  registerUserData = {
    email: undefined,
    password: undefined
  };
  constructor(private _authNew: AuthService,
              private _router: Router) { }


  ngOnInit() {
  }

  registerUser() {
    this._authNew.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/account']);
      },
      err => console.log(err)
    )
  }
}
