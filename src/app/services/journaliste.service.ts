import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JournalisteService {

  JOURNALISTE_URL: string = "http://localhost:3000";
  constructor(private httpClient :HttpClient){}
  
  public addJournaliste(journaliste: any, img:File){
    console.log("journaliste from service");
    let formData =new FormData();
    formData.append('Situation',journaliste.Situation);
    formData.append('NomPrenom',journaliste.NomPrenom);
    formData.append('Anniversaire',journaliste.Anniversaire);
    formData.append('Medias',journaliste.Medias);
    formData.append('Support',journaliste.Support);
    formData.append('Service',journaliste.Service);
    formData.append('Qualification',journaliste.Qualification);
    formData.append('Specialite',journaliste.Specialite);
    formData.append('Rubrique',journaliste.Rubrique);
    formData.append('img',img);
    formData.append('Formation',journaliste.Formation);
    formData.append('Adresse',journaliste.Adresse);
    formData.append('Direct',journaliste.Direct);
    formData.append('Standard',journaliste.Standard);
    formData.append('Fax',journaliste.Fax);
    formData.append('Portable',journaliste.Portable);
    formData.append('Presence',journaliste.Presence);
    formData.append('Domicile',journaliste.Domicile);
    formData.append('Mail',journaliste.Mail);
    formData.append('Reseaux',journaliste.Reseaux);
    formData.append('SkypeViber',journaliste.SkypeViber);
    formData.append('Site',journaliste.Site);
    formData.append('Appreciation',journaliste.Appreciation);
    formData.append('Couvertures',journaliste.Couvertures);
    formData.append('cadeaux',journaliste.cadeaux);
    formData.append('Types',journaliste.Types);
    formData.append('Occasion',journaliste.Occasion);
    formData.append('InfoDrives',journaliste.InfoDrives);
    console.log(formData)
    return this.httpClient.post<{message:string}>(`${this.JOURNALISTE_URL + '/api/addJournaliste'}`, formData)
 }  

 public getJournaliste(){ 

  return this.httpClient.get<{journalistes:any}>(this.JOURNALISTE_URL + '/api/allJournalistes');
 
}

public deleteJournaliste(id:any){
  return this.httpClient.delete<{message:string}>(`${this.JOURNALISTE_URL + '/api/deleteJournaliste'}/${id}`)
}
public updateJournaliste(journaliste:any, img:File ){
  console.log("journaliste from service");
  let formData =new FormData();
  formData.append('_id',journaliste._id);
  formData.append('Situation',journaliste.Situation);
  formData.append('NomPrenom',journaliste.NomPrenom);
  formData.append('Anniversaire',journaliste.Anniversaire);
  formData.append('Medias',journaliste.Medias);
  formData.append('Support',journaliste.Support);
  formData.append('Service',journaliste.Service);
  formData.append('Qualification',journaliste.Qualification);
  formData.append('Specialite',journaliste.Specialite);
  formData.append('Rubrique',journaliste.Rubrique);
  formData.append('img',img);
  formData.append('Formation',journaliste.Formation);
  formData.append('Adresse',journaliste.Adresse);
  formData.append('Direct',journaliste.Direct);
  formData.append('Standard',journaliste.Standard);
  formData.append('Fax',journaliste.Fax);
  formData.append('Portable',journaliste.Portable);
  formData.append('Presence',journaliste.Presence);
  formData.append('Domicile',journaliste.Domicile);
  formData.append('Mail',journaliste.Mail);
  formData.append('Reseaux',journaliste.Reseaux);
  formData.append('SkypeViber',journaliste.SkypeViber);
  formData.append('Site',journaliste.Site);
  formData.append('Appreciation',journaliste.Appreciation);
  formData.append('Couvertures',journaliste.Couvertures);
  formData.append('cadeaux',journaliste.cadeaux);
  formData.append('Types',journaliste.Types);
  formData.append('Occasion',journaliste.Occasion);
  formData.append('InfoDrives',journaliste.InfoDrives);
  console.log(formData)
 
  return this.httpClient.put<{message:string}>(`${this.JOURNALISTE_URL + '/api/editJournaliste'}/${journaliste._id}`,formData)
}

public getJour(id:any ){
 
  return this.httpClient.get<{journaliste:any}>(`${this.JOURNALISTE_URL + '/api/allJournalistes'}/${id}`); 
}

public getJournalisteByName(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{journalistes:any}>(this.JOURNALISTE_URL + '/api/getJournalisteByName', search1);
}
public getJournalisteByAnniversaire(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{journalistes:any}>(this.JOURNALISTE_URL + '/api/getJournalisteByAnniversaire', search1);
}
public getJournalisteByMedia(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{journalistes:any}>(this.JOURNALISTE_URL + '/api/getJournalisteByMedia', search1);
}

public getJournalisteByPortable(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{journalistes:any}>(this.JOURNALISTE_URL + '/api/getJournalisteByPortable', parseInt(search1));
}

public getJournalisteByAdresse(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{journalistes:any}>(this.JOURNALISTE_URL + '/api/getJournalisteByAdresse', search1);
}

public getJournalisteByMail(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{journalistes:any}>(this.JOURNALISTE_URL + '/api/getJournalisteByMail', search1);
}


}
