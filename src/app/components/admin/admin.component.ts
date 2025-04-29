import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:any;
  user: any = {};
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAdmins().subscribe(
      (data)=>{
       this.users=data.users;
        console.log(this.users);
     }) 
  }

}
