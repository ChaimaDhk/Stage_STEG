import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
 
@Component({
  selector: 'app-imprimer-media',
  templateUrl: './imprimer-media.component.html',
  styleUrls: ['./imprimer-media.component.css']
})
export class ImprimerMediaComponent implements OnInit {
id:any;
media:any;
data:any;
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private mediaService:MediaService) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('my id',this.id);
    this.mediaService.getMedia(this.id).subscribe(
      (data)=>{
        this.media =data.media;
      })
  }
  DownloadPDF() {
    this.data = document.getElementById('media');
    html2canvas(this.data).then(canvas => {
      var imgWidth =150;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      const doc = new jsPDF();
      var position = 0;
      doc.addImage(contentDataURL, 'PNG', 0, position,imgWidth, imgHeight)
      doc.save('media.pdf');
    });
  }
}
