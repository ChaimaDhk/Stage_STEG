import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JournalisteService } from 'src/app/services/journaliste.service';

@Component({
  selector: 'app-afficher-journaliste',
  templateUrl: './afficher-journaliste.component.html',
  styleUrls: ['./afficher-journaliste.component.css']
})
export class AfficherJournalisteComponent implements OnInit {
  id:any;
  journaliste:any;
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private journalisteService:JournalisteService ) { }

  ngOnInit(): void { 
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
  console.log('my id',this.id);
 
  this.journalisteService.getJour(this.id).subscribe(
    (data)=>{
      this.journaliste =data.journaliste;
    })
 

 
}
}
