import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: any = {};
  findedUser:any;
  loginForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  login(){
    console.log("user from ts",this.user);
    
    this.usersService.login(this.user).subscribe(
      (data)=> {
          console.log(data.findedUser);
          this.findedUser = data.findedUser;
        if ( this.findedUser == "Check you email") {
          alert("check your email")
        } else if ( this.findedUser== "check your password") {
          alert("check your password")
        }else
       {
          console.log(this.findedUser.role);
          localStorage.setItem("userConnect",JSON.stringify(this.findedUser));

       
          switch (this.findedUser.role) {
                    case "invalideUser":
                      Swal.fire('Connexion refusée \n Votre compte est invalide \n Essayer une autre fois')
                      break;
            
                      case "Admin":
                        this.router.navigate(['/acceuil']);
                        break;
                        case "valider":
                          this.router.navigate(['profil/:id']);
                          break;
                  }
                }
          
      })

  }

}
