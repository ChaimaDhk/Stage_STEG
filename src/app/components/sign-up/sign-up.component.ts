import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from  '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
UserForm!:FormGroup;
submitted = false;
imagePreview:any;
  constructor(private router: Router,private formBuilder:FormBuilder,private usersService:UsersService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     //creation des inputs
  this.UserForm =this.formBuilder.group({
    Nom: ['', Validators.required],
    Prenom: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirm: ['', Validators.required],
    img:[''],
  });

  }

  sign(c:any){
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.UserForm.invalid) {
        return;
    }
 
    this.submitted = true;
    this.usersService.signUp(c,this.UserForm.value.img).subscribe(
      (data)=>{
      console.log(data.message);
    })
  Swal.fire({
    title: ' Envoyer la demande de validation',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Envoyer',
    denyButtonText: `Annuler`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Envoyé!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })

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
