import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  searchForm!: FormGroup;
  isDisplay:any;
  test:any;
  medias:any;
  constructor(private router:Router , private mediaService : MediaService,private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.isDisplay=false;
    this.test=false;
    this.searchForm =this.formBuilder.group({
      search: ['']
   
  });
    this.mediaService.getMedias().subscribe(
      (data)=>{
        console.log(data.medias);
      this.medias = data.medias;
  })
  }
   //declaration de la fonction
 getMedia2(id:any){
  this.router.navigate([`imprimerMedia/${id}`]);

}
//declaration de la fonction
updateMedia(id:any){
  this.router.navigate([`editMedia/${id}`]);

}
 //declaration de la fonction
 getMedia(id:any){
  this.router.navigate([`afficherMedia/${id}`]);
}
deleteMedia(id:any){

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

  this.mediaService.deleteMedia(id).subscribe(
    (data)=>{
      console.log("helllo",data.message);})
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'this event has been deleted.',
        'success'
      )
      this.mediaService.getMedias().subscribe(
        (data)=>{
          console.log(data.medias);
        this.medias = data.medias;
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
search(s:any){
  console.log("x:",s);
  console.log("test",this.test);
   this.mediaService.getMediaByName(s).subscribe(
    (data)=>{
     this.medias=data.medias;
      console.log(this.medias);
    this.isDisplay=!this.isDisplay;
    this.test = true;
    console.log(" this.isDisplay=", this.isDisplay);
   }) 
   return this.test;
}
}
