import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: any = {};
  UserForm!:FormGroup;
  id:any;
 users:any;
 userConnect:any;
  submitted = false;
  imagePreview:any;
  constructor(private formBuilder:FormBuilder ,private router: Router,private userService:UsersService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userConnect = JSON.parse(localStorage.getItem("userConnect") || "");
         //creation des inputs
  this.UserForm =this.formBuilder.group({
   img:[''], 
    Nom: ['', Validators.required],
    Prenom: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
   
  });
  this.userService.getUsers(this.userConnect._id).subscribe(
    (data)=>{
      console.log(data);
      this.user=data.user;
    })
}

edit(c:any){
  this.submitted = true;
  // stop here if form is invalid
  if (this.UserForm.invalid) {
      return;
  }
  console.log(this.UserForm.value.img);
    this.userService.updateProfile(this.user,this.UserForm.value.img).subscribe(
      (data)=>{
        console.log(data.message);
      })
       // display form values on success
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Modifier',
  showConfirmButton: false,
  timer: 1500
}) 
window.location.reload();

this.userService.getUsers(this.user._id).subscribe(
  (data)=>{
    console.log(data);
    this.user=data.user;
  })
 window.localStorage.clear();
 localStorage.setItem("userConnect",JSON.stringify(this.user));

} 









changer(){

  this.router.navigate(['password']);

}

deconnecter(){
  window.localStorage.clear();
  this.router.navigate(['']);

}
get f() { return this.UserForm.controls; }


onReset() {
    this.submitted = false;
    this.UserForm.reset();
} 
onImageSelected(event: Event) {
  //Selection du fichier
  const file = (event.target as HTMLInputElement).files![0];
  // Ajout d'un attribut img dans l'objet Event
  this.UserForm.patchValue({ img: file });
  // Mise à jour des valeurs du form
  this.UserForm.updateValueAndValidity();
  // Creation d'une variable reader pour lire le contenu de fichiers
  const reader = new FileReader();
  //Déclenchement du event load lors d'une lecture de fichier avec succès
  reader.onload = () => {
    //affecter le résultat de la lecture dans la variable imagePreview
  this.imagePreview = reader.result as string
  };
  // lecture du contenu du fichier Blob ou File
  reader.readAsDataURL(file);
  }
}
