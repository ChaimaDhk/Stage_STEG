import { Component, OnInit } from '@angular/core';
import { JournalisteService } from 'src/app/services/journaliste.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-journaliste',
  templateUrl: './ajouter-journaliste.component.html',
  styleUrls: ['./ajouter-journaliste.component.css']
})
export class AjouterJournalisteComponent implements OnInit {
  journaliste: any = {};
  id:any;
  title:any;
  titre2:any;
  journalistes:any;
  journalisteForm!:FormGroup;
  submitted = false;
  imagePreview:any;
  constructor(private formBuilder:FormBuilder ,private journalisteService:JournalisteService, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get(`id`);
    if (this.id) {
      //edit
      this.title="MODIFIER";
      this.titre2="Modifier";
      this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
    this.journalistes=JSON.parse(localStorage.getItem("journalistes") || "[]");

       this.journalisteService.getJour(this.id).subscribe(
      (data)=>{
        this.journaliste =data.journaliste;
      })
    } else {
      //add
      this.title="AJOUTER";
      this.titre2="Ajouter";
    }
  //creation des inputs
  this.journalisteForm =this.formBuilder.group({
    Situation: ['', Validators.required],
    NomPrenom: ['', Validators.required],
    Anniversaire: ['', Validators.required],
    Medias: ['', Validators.required],
    Support: ['', Validators.required],
    Service: ['', Validators.required],
    Qualification: ['', Validators.required],
    Specialite: ['', Validators.required],
    Rubrique: ['', Validators.required],
    img:[''],
    Formation: ['', Validators.required],
    Adresse:  ['', Validators.required],
    Direct:  ['', Validators.required],
    Standard:  ['', Validators.required],
    Fax:  ['', Validators.required],
    Portable:  ['', Validators.required],
    Presence: ['', Validators.required],
    Domicile:  ['', Validators.required],
    Mail:  ['', Validators.required,, Validators.email],
    Reseaux: ['', Validators.required],
    SkypeViber:  ['', Validators.required],
    Site: ['', Validators.required],
    Appreciation:  ['', Validators.required],
    Couvertures: ['', Validators.required],
    cadeaux:  ['', Validators.required],
    Types:  [''],
    Occasion:  [''],
    InfoDrives:  ['']
  });

  }
  addOrEditJournaliste(c:any) {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.journalisteForm.invalid) {
        return;
    }
 
  if (this.id) {
      console.log("mon jurnaliste",this.journaliste)
     
    
      this.journalisteService.updateJournaliste(this.journaliste,this.journalisteForm.value.img).subscribe(
        (data)=>{
          console.log(data.message);
        })
         // display form values on success
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Ajouter',
    showConfirmButton: false,
    timer: 1500
  })
} 
  else {
      this.journalisteService.addJournaliste(c,this.journalisteForm.value.img).subscribe(
        (data)=>{
        console.log(data.message);
      })};
       // display form values on success
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Modifier',
    showConfirmButton: false,
    timer: 1500
  })
  
 
 
}


  get f() { return this.journalisteForm.controls; }


  onReset() {
      this.submitted = false;
      this.journalisteForm.reset();
  }
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Event
    this.journalisteForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.journalisteForm.updateValueAndValidity();
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
