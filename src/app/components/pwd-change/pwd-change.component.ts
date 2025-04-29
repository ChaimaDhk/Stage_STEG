import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { OldPwdValidators } from '../old-pwd.validators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pwd-change',
  templateUrl: './pwd-change.component.html',
  styleUrls: ['./pwd-change.component.css']
})
export class PwdChangeComponent  {

  pass:any;
  submitted = false;
    form1!: FormGroup; 
    userConnect:any;
    constructor(private formBuilder :FormBuilder,private userService:UsersService){ }
    ngOnInit(): void {
      this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");
      this.form1 =this.formBuilder.group({
        'oldPwd': ['',Validators.required],
        'newPwd': ['',Validators.required],
        'confirmPwd': ['',Validators.required]
      }, {
        validator: OldPwdValidators.matchPwds
      });
    }
  
    get oldPwd(){
      return this.form1.get('oldPwd');
    }
  
     get newPwd(){
      return this.form1.get('newPwd');
    }
  
     get confirmPwd(){
      return this.form1.get('confirmPwd');
    }
    updatePwd(form:any){
      this.submitted = true;
  
      this.userService.updatePwd(this.userConnect,form).subscribe(
        (data)=>{
          console.log(data.message);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mot de passe est modifiée',
            showConfirmButton: false,
            timer: 1500
          })
      })
    }
  }