import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RetombeService } from 'src/app/services/retombe.service';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-afficher-retombe',
  templateUrl: './afficher-retombe.component.html',
  styleUrls: ['./afficher-retombe.component.css']
})
export class AfficherRetombeComponent implements OnInit {
  id:any;
  retombe:any;
  data:any;
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private retombeService:RetombeService) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
   
    this.retombeService.getRetombe(this.id).subscribe(
      (data)=>{
        this.retombe =data.retombe;
        console.log(this.retombe)
  
      
    
    });
    this.retombeService.getretombe(this.id).subscribe(
      (data)=>{
        this.retombe =data.retombe;
      })
   
  }
  DownloadPDF() {
    this.data = document.getElementById('retombe');
    html2canvas(this.data).then(canvas => {
      var imgWidth =150;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      const doc = new jsPDF();
      var position = 0;
      doc.addImage(contentDataURL, 'PNG', 0, position,imgWidth, imgHeight)
      doc.save('retombe.pdf');
    });
}
}
