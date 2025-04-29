import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  MEDIA_URL : string = "http://localhost:3000";
  constructor(private httpClient :HttpClient){}
  
  public getMedia(id:any ){
 
    return this.httpClient.get<{media:any}>(`${this.MEDIA_URL + '/api/allMedias'}/${id}`); 
  }
  public addMedia(media: any, img:File){
    console.log("journaliste from service");
    let formData =new FormData();
    formData.append('Media',media.Media);
    formData.append('TypeMedia',media.TypeMedia);
    formData.append('Neutralite',media.Neutralite);
    formData.append('Diffusion',media.Diffusion);
    formData.append('Fondation',media.Fondation);
    formData.append('Contenu',media.Contenu);
    formData.append('Specialite',media.Specialite);
    formData.append('img',img);
    formData.append('Standard',media.Standard);
    formData.append('Fax',media.Fax);
    formData.append('Mail',media.Mail);
    formData.append('Reseaux',media.Reseaux);
    formData.append('Adresse',media.Adresse); 
    formData.append('Site',media.Site);
    formData.append('DateBouclage',media.DateBouclage);
    formData.append('Ondes',media.Ondes);
    formData.append('Zone',media.Zone);
    formData.append('Coordonnees',media.Coordonnees);
    formData.append('Fondateur',media.Fondateur);
    formData.append('Redacteur',media.Redacteur);
    formData.append('Assistant',media.Assistant);
    formData.append('ChefDeRubriqueSport',media.ChefDeRubriqueSport);
    formData.append('ChefDeRubriqueEconomie',media.ChefDeRubriqueEconomie);
    formData.append('ChefDeRubriqueCulture',media.ChefDeRubriqueCulture);
    formData.append('ChefDeRubriqueNation',media.ChefDeRubriqueNation);
    formData.append('ChefDeRubriqueInternational',media.ChefDeRubriqueInternational);
    formData.append('Tirage',media.Tirage);
    formData.append('Distribution',media.Distribution);
    formData.append('Audience',media.Audience);
    formData.append('TarifsPublicitaires',media.TarifsPublicitaires);
    formData.append('Contact',media.Contact);
    formData.append('Autre',media.Autre);
 
    console.log(formData)
    return this.httpClient.post<{message:string}>(`${this.MEDIA_URL + '/api/addMedia'}`, formData)
 }  
 public updateMedia(media:any, img:File ){
  console.log("media from service");
  let formData =new FormData();
  formData.append('_id',media._id);
  formData.append('Media',media.Media);
    formData.append('TypeMedia',media.TypeMedia);
    formData.append('Neutralite',media.Neutralite);
    formData.append('Diffusion',media.Diffusion);
    formData.append('Fondation',media.Fondation);
    formData.append('Contenu',media.Contenu);
    formData.append('Specialite',media.Specialite);
    formData.append('img',img);
    formData.append('Standard',media.Standard);
    formData.append('Fax',media.Fax);
    formData.append('Mail',media.Mail);
    formData.append('Reseaux',media.Reseaux);
    formData.append('Adresse',media.Adresse); 
    formData.append('Site',media.Site);
    formData.append('DateBouclage',media.DateBouclage);
    formData.append('Ondes',media.Ondes);
    formData.append('Zone',media.Zone);
    formData.append('Coordonnees',media.Coordonnees);
    formData.append('Fondateur',media.Fondateur);
    formData.append('Redacteur',media.Redacteur);
    formData.append('Assistant',media.Assistant);
    formData.append('ChefDeRubriqueSport',media.ChefDeRubriqueSport);
    formData.append('ChefDeRubriqueEconomie',media.ChefDeRubriqueEconomie);
    formData.append('ChefDeRubriqueCulture',media.ChefDeRubriqueCulture);
    formData.append('ChefDeRubriqueNation',media.ChefDeRubriqueNation);
    formData.append('ChefDeRubriqueInternational',media.ChefDeRubriqueInternational);
    formData.append('Tirage',media.Tirage);
    formData.append('Distribution',media.Distribution);
    formData.append('Audience',media.Audience);
    formData.append('TarifsPublicitaires',media.TarifsPublicitaires);
    formData.append('Contact',media.Contact);
    formData.append('Autre',media.Autre);
  console.log(formData)
 
  return this.httpClient.put<{message:string}>(`${this.MEDIA_URL + '/api/editMedia'}/${media._id}`,formData)
}
public getMedias(){ 

  return this.httpClient.get<{medias:any}>(this.MEDIA_URL + '/api/allMedias');
 
}
public deleteMedia(id:any){
  return this.httpClient.delete<{message:string}>(`${this.MEDIA_URL + '/api/deleteMedia'}/${id}`)
}
public getMediaByName(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{medias:any}>(this.MEDIA_URL + '/api/getMediaByName', search1);
}
}
