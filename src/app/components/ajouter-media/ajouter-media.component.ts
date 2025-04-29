import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { JournalisteService } from 'src/app/services/journaliste.service';

@Component({
  selector: 'app-ajouter-media',
  templateUrl: './ajouter-media.component.html',
  styleUrls: ['./ajouter-media.component.css']
})
export class AjouterMediaComponent implements OnInit {
  media: any = {};
  id:any;
  title:any;
  titre2:any;
  medias:any;
 mediaForm!:FormGroup;
  submitted = false;
  imagePreview:any;
  journaliste:any
  constructor(private formBuilder:FormBuilder ,private mediaService:MediaService, private activatedRoute:ActivatedRoute,private journalisteServive:JournalisteService ) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get(`id`);
    if (this.id) {
      //edit
      this.title="MODIFIER";
      this.titre2="Modifier";
      this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
    this.medias=JSON.parse(localStorage.getItem("medias") || "[]");

       this.mediaService.getMedia(this.id).subscribe(
      (data)=>{
        this.media =data.media;
      })
    } else {
      //add
      this.title="AJOUTER";
      this.titre2="Ajouter";
    }
    this.journalisteServive.getJournaliste().subscribe(
      (data)=>{
        this.journaliste =data.journalistes;
      })
  //creation des inputs
  this.mediaForm =this.formBuilder.group({
    Media  :  ['', Validators.required],
    TypeMedia  :  ['', Validators.required],
    Neutralite  : ['', Validators.required],
    Diffusion  :  ['', Validators.required],
    Fondation  :   ['', Validators.required],
    Contenu  :   ['', Validators.required],
    Specialite  :  ['', Validators.required],
   img :  [''],
   Standard :  ['', Validators.required],
   Fax : ['', Validators.required],
   Mail : ['', Validators.required],
   Reseaux :  ['', Validators.required],
   Adresse :   ['', Validators.required],
 
   Site :  ['', Validators.required],
   DateBouclage : ['', Validators.required],
   Ondes  : ['', Validators.required],
   Zone  :  ['', Validators.required],
   Coordonnees : ['', Validators.required],
   Fondateur:  ['', Validators.required],
   Redacteur :  ['', Validators.required],
   Assistant  :  ['', Validators.required],
   ChefDeRubriqueSport :  ['', Validators.required],
   ChefDeRubriqueEconomie :  ['', Validators.required],
   ChefDeRubriqueCulture  :   ['', Validators.required],
   ChefDeRubriqueNation  :  ['', Validators.required],
   ChefDeRubriqueInternational:  ['', Validators.required],
   Tirage   :   ['', Validators.required],
   Distribution   :   ['', Validators.required],
   Audience   :  ['', Validators.required],
   TarifsPublicitaires   :   ['', Validators.required],
   Contact   :  ['', Validators.required],
   Autre  :   ['', Validators.required]
   
  });

  }

  addOrEditMedia(c:any) {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.mediaForm.invalid) {
        return;
    }
 
  if (this.id) {
      console.log("mon jurnaliste",this.media)
     
    
      this.mediaService.updateMedia(this.media,this.mediaForm.value.img).subscribe(
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
      this.mediaService.addMedia(c,this.mediaForm.value.img).subscribe(
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








  get f() { return this.mediaForm.controls; }


  onReset() {
      this.submitted = false;
      this.mediaForm.reset();
  }
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Event
    this.mediaForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.mediaForm.updateValueAndValidity();
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
