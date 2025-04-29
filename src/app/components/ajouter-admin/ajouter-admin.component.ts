import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {
  AdminForm!:FormGroup;

  submitted = false;
  imagePreview:any;
  constructor(private router: Router,private formBuilder:FormBuilder,private usersService:UsersService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
        //creation des inputs
  this.AdminForm =this.formBuilder.group({
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
    if (this.AdminForm.invalid) {
        return;
    }
 
    this.submitted = true;
    this.usersService.signUpAdmin(c,this.AdminForm.value.img).subscribe(
      (data)=>{
      console.log(data.message);
    })
  Swal.fire({
    title: ' Ajouter',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Ajouter',
    denyButtonText: `Annuler`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Ajouter', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })

  this.router.navigate(['Admin']);
}

  get f() { return this.AdminForm.controls; }


  onReset() {
      this.submitted = false;
      this.AdminForm.reset();
  }
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Event
    this.AdminForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.AdminForm.updateValueAndValidity();
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
