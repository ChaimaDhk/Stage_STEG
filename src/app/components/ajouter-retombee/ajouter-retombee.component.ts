import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';
import { RetombeService } from 'src/app/services/retombe.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-retombee',
  templateUrl: './ajouter-retombee.component.html',
  styleUrls: ['./ajouter-retombee.component.css']
})
export class AjouterRetombeeComponent implements OnInit {
  retombeForm!:FormGroup;
  submitted = false;
  retombe: any = {};
  imagePreview:any;
  id:any;
  title:any;
  titre2:any;
  retombes:any;
  media:any;
  constructor(private formBuilder:FormBuilder,private retombeService:RetombeService , private activatedRoute:ActivatedRoute,private mediaService:MediaService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get(`id`);
    if (this.id) {
      //edit
      this.title="MODIFIER";
      this.titre2="Modifier";
      this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
    this.retombes=JSON.parse(localStorage.getItem("retombes") || "[]");

       this.retombeService.getRetombe(this.id).subscribe(
      (data)=>{
        this.retombe =data.retombe;
      })
    } else {
      //add
      this.title="AJOUTER";
      this.titre2="Ajouter";
    }
    this.mediaService.getMedias().subscribe(
      (data)=>{
        this.media =data.medias;
      })


     //creation des inputs
  this.retombeForm =this.formBuilder.group({
    Periode: ['', Validators.required],
    Date: ['', Validators.required],
    TypeMedia: ['', Validators.required],
    Media: ['', Validators.required],
    Langue: ['', Validators.required],
    Titre: ['', Validators.required],
    Signature: ['', Validators.required],
    RedacteurAnimateur: ['', Validators.required],
    Themes: ['', Validators.required],
    Unit: ['', Validators.required],
    Tendance:  ['', Validators.required],
    Lien:  ['', Validators.required],
    donnerAnnotations:  ['', Validators.required],
    Travail:  ['', Validators.required],
    LienOutput:  ['', Validators.required], 
 
  });
  }
  addOrEditretombe(c:any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.retombeForm.invalid) {
        return;
    }
  if (this.id) {
      console.log("mon jurnaliste",this.retombe)
      this.retombeService.updateRetombe(this.retombe).subscribe(
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
} 
  else {
      this.retombeService.addRetome(c).subscribe(
        (data)=>{
        console.log(data.message);
      })};
       // display form values on success
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Ajouter',
    showConfirmButton: false,
    timer: 1500
  })
}





  get f() { return this.retombeForm.controls; }
  onReset() {
      this.submitted = false;
      this.retombeForm.reset();
  }
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Event
    this.retombeForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.retombeForm.updateValueAndValidity();
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
