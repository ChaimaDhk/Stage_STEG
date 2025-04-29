import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from 'express';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  users:any;
  user: any = {};
  
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUserValider().subscribe(
      (data)=>{
       this.users=data.users;
        console.log(this.users);
     }) 
  
  }

}
