import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JournalisteService } from 'src/app/services/journaliste.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-journaliste',
  templateUrl: './journaliste.component.html',
  styleUrls: ['./journaliste.component.css']
})
export class JournalisteComponent implements OnInit {
  journalistes:any;
  isDisplay:any;
  test:any;
  searchForm!: FormGroup;
  constructor(private router:Router , private journalistesService : JournalisteService,private formBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.isDisplay=false;
    this.test=false;
    this.searchForm =this.formBuilder.group({
      search: ['']
   
  });
    this.journalistesService.getJournaliste().subscribe(
      (data)=>{
        console.log(data.journalistes);
      this.journalistes = data.journalistes;
  })
  }

 //declaration de la fonction
 updateJournaliste(id:any){
  this.router.navigate([`editJournaliste/${id}`]);

}
 //declaration de la fonction
 getJournaliste2(id:any){
  this.router.navigate([`imprimer/${id}`]);

}
 //declaration de la fonction
 getJournaliste(id:any){
  this.router.navigate([`afficher/${id}`]);
}
  deleteJournaliste(id:any){

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
    
      this.journalistesService.deleteJournaliste(id).subscribe(
        (data)=>{
          console.log("helllo",data.message);})
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'this event has been deleted.',
            'success'
          )
          this.journalistesService.getJournaliste().subscribe(
            (data)=>{
              console.log(data.journalistes);
            this.journalistes = data.journalistes;
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
       this.journalistesService.getJournalisteByName(s).subscribe(
        (data)=>{
         this.journalistes=data.journalistes;
          console.log(this.journalistes);
        this.isDisplay=!this.isDisplay;
        this.test = true;
        console.log(" this.isDisplay=", this.isDisplay);
       }) 
       return this.test;
    }
    
    search1(s:any){
          console.log("x:",s);
           this.journalistesService.getJournalisteByMail(s).subscribe(
            (data)=>{
             this.journalistes=data.journalistes;
              console.log(this.journalistes);
            this.isDisplay=!this.isDisplay;
            this.test=true
           }) 
        return this.test
         
    }
    search2(s:any){
              console.log("x:",s);
               this.journalistesService.getJournalisteByMedia(s).subscribe(
                (data)=>{
                 this.journalistes=data.journalistes;
                  console.log(this.journalistes);
                this.isDisplay=!this.isDisplay;
                this.test=true
               }) 
              return this.test
             
    } 
    search3(s:any){
                  console.log("x:",s);
                   this.journalistesService.getJournalisteByAnniversaire(s).subscribe(
                    (data)=>{
                     this.journalistes=data.journalistes;
                      console.log(this.journalistes);
                    this.isDisplay=!this.isDisplay;
                    this.test=true
                    
                   }) 
                return   this.test
                 
    } 
    search4(s:any){
                      console.log("x:",s);
                       this.journalistesService.getJournalisteByPortable(s).subscribe(
                        (data)=>{
                         this.journalistes=data.journalistes;
                          console.log(this.journalistes);
                        this.isDisplay=!this.isDisplay;
                 
                        
                       }) 
                    
   }
    search5(s:any){
                          console.log("x:",s);
                           this.journalistesService.getJournalisteByAdresse(s).subscribe(
                            (data)=>{
                             this.journalistes=data.journalistes;
                              console.log(this.journalistes);
                            this.isDisplay=!this.isDisplay;
                      
                            
                           }) 
                        
                         
   }
   searchs(s:any){
  this.search(s);
  console.log("test1",this.test)
   }

}