import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-afficher-media',
  templateUrl: './afficher-media.component.html',
  styleUrls: ['./afficher-media.component.css']
})
export class AfficherMediaComponent implements OnInit {
  id:any;
  media:any;
  constructor(private activatedRoute :ActivatedRoute ,private formBuilder:FormBuilder , private mediaService:MediaService) { }

  ngOnInit(): void {   this.id =this.activatedRoute.snapshot.paramMap.get('id');
  console.log('my id',this.id);
 
  this.mediaService.getMedia(this.id).subscribe(
    (data)=>{
      this.media =data.media;
    })
 

 
}

}
