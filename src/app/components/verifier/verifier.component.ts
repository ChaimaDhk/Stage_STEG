import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-verifier',
  templateUrl: './verifier.component.html',
  styleUrls: ['./verifier.component.css']
})
export class VerifierComponent implements OnInit {
users:any;
user: any = {};

  constructor(private router:Router ,private usersService:UsersService,private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.usersService.getUserInvalide().subscribe(
     (data)=>{
      this.users=data.users;
       console.log(this.users);
    }) 
 
  }
  deleteUser(id:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({

      title: 'Are you sure?',
      text: "You won't to delete this event!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      
   
      if (result.isConfirmed) {
  
    this.usersService.deleteUser(id).subscribe(
      (data)=>{
        console.log("helllo",data.message);})
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'this event has been deleted.',
          'success'
        )
        this.usersService.getUserInvalide().subscribe(
          (data)=>{
            console.log(data.users);
          this.users = data.users;
      })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your event is safe :)',
        'error'
      )
    }
  })
  }

  valider(c:any){
     
Swal.fire({
  title: 'Do you want to validate the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'validate',
  denyButtonText: `Don't validate`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    this.usersService.updateUser(c).subscribe(
      (data)=>{
        console.log(data.message);
      })
    Swal.fire('validate!', '', 'success')
    this.usersService.getUserInvalide().subscribe(
      (data)=>{
        this.users = data.users;
      })
  
  } else if (result.isDenied) {
    Swal.fire('Changes are not validate', '', 'info')
  }
})

   
}
}