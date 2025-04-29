import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JournalisteService } from 'src/app/services/journaliste.service';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
 
@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.component.html',
  styleUrls: ['./imprimer.component.css']
})
export class ImprimerComponent implements OnInit {
  id:any;
  journaliste:any;
  data:any;
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private journalisteService:JournalisteService) { }
 
  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
   
    this.journalisteService.getJour(this.id).subscribe(
      (data)=>{
        this.journaliste =data.journaliste;
        console.log(this.journaliste)
  
      
    
    });
    this.journalisteService.getJour(this.id).subscribe(
      (data)=>{
        this.journaliste =data.journaliste;
      })
   
  }
  DownloadPDF() {
    this.data = document.getElementById('journaliste');
    html2canvas(this.data).then(canvas => {
      var imgWidth =150;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      const doc = new jsPDF();
      var position = 0;
      doc.addImage(contentDataURL, 'PNG', 0, position,imgWidth, imgHeight)
      doc.save('journaliste.pdf');
    });
}
}
