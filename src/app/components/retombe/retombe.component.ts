import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RetombeService } from 'src/app/services/retombe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retombe',
  templateUrl: './retombe.component.html',
  styleUrls: ['./retombe.component.css']
})
export class RetombeComponent implements OnInit {
retombes:any;
test:any;
isDisplay:any;
searchForm!: FormGroup;
  constructor(private router:Router ,private retombeService:RetombeService,private formBuilder :FormBuilder) { }


  ngOnInit(): void {
    this.isDisplay=false;
    this.test=false;
    this.searchForm =this.formBuilder.group({
      search: ['']
   
  });
    this.retombeService.getRetombes().subscribe(
      (data)=>{
        console.log(data.retombes);
      this.retombes = data.retombes;
  })
  }
   //declaration de la fonction
 updateRetombe(id:any){
  this.router.navigate([`editRetombe/${id}`]);

}
deleteRetombe(id:any){

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

  this.retombeService.deleteRetombe(id).subscribe(
    (data)=>{
      console.log("helllo",data.message);})
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'this event has been deleted.',
        'success'
      )
      this.retombeService.getRetombes().subscribe(
        (data)=>{
          console.log(data.retombes);
        this.retombes = data.retombes;
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
 //declaration de la fonction
 getRetombe(id:any){
  this.router.navigate([`afficherRetombe/${id}`]);
}
search(s:any){
  console.log("x:",s);
   this.retombeService.getRetombeeByDate(s).subscribe(
    (data)=>{
     this.retombes=data.retombes;
      console.log(this.retombes);
    this.isDisplay=!this.isDisplay;
    this.test=true
    
   }) 
return   this.test
 
} 

}
