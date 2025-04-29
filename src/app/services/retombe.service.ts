import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RetombeService {
  RETOMBEE_URL: string = "http://localhost:3000";
  constructor(private httpClient :HttpClient){}
  public getRetombe(id:any ){
    return this.httpClient.get<{retombe:any}>(`${this.RETOMBEE_URL + '/api/allRetombe'}/${id}`); 
  }
  public addRetome(retombe: any){
    console.log("journaliste from service");
    let formData =new FormData();
    formData.append('Periode',retombe.Periode);
    formData.append('Date',retombe.Date);
    formData.append('TypeMedia',retombe.TypeMedia);
    formData.append('Media',retombe.Media);
    formData.append('Langue',retombe.Langue);
    formData.append('Titre',retombe.Titre);
    formData.append('Signature',retombe.Signature);
    formData.append('RedacteurAnimateur',retombe.RedacteurAnimateur);
    formData.append('Themes',retombe.Themes);
    formData.append('Unit',retombe.Unit);
    formData.append('Tendance',retombe.Tendance);
    formData.append('Lien',retombe.Lien);
    formData.append('donnerAnnotations',retombe.donnerAnnotations);
    formData.append('Travail',retombe.Travail);
    formData.append('LienOutput',retombe.LienOutput);
 
    console.log(formData)
    return this.httpClient.post<{message:string}>(`${this.RETOMBEE_URL + '/api/addRetombe'}`, retombe)
 }  
 public updateRetombe(retombe:any ){
  console.log("journaliste from service");
  let formData =new FormData();
  formData.append('_id',retombe._id);
  formData.append('Periode',retombe.Periode);
  formData.append('Date',retombe.Date);
  formData.append('TypeMedia',retombe.TypeMedia);
  formData.append('Media',retombe.Media);
  formData.append('Langue',retombe.Langue);
  formData.append('Titre',retombe.Titre);
  formData.append('Signature',retombe.Signature);
  formData.append('RedacteurAnimateur',retombe.RedacteurAnimateur);
  formData.append('Themes',retombe.Themes);
  formData.append('Unit',retombe.Unit);
  formData.append('Tendance',retombe.Tendance);
  formData.append('Lien',retombe.Lien);
  formData.append('donnerAnnotations',retombe.donnerAnnotations);
  formData.append('Travail',retombe.Travail);
  formData.append('LienOutput',retombe.LienOutput);

  console.log(formData)
 
  return this.httpClient.put<{message:string}>(`${this.RETOMBEE_URL + '/api/editRetombe'}/${retombe._id}`,retombe)
}
public getRetombes(){ 

  return this.httpClient.get<{retombes:any}>(this.RETOMBEE_URL + '/api/allRetombes');
 
}
public deleteRetombe(id:any){
  return this.httpClient.delete<{message:string}>(`${this.RETOMBEE_URL + '/api/deleteRetombe'}/${id}`)
}
public getretombe(id:any ){
 
  return this.httpClient.get<{retombe:any}>(`${this.RETOMBEE_URL + '/api/allRetombes'}/${id}`); 
}
public getRetombeeByDate(search1:any){ 
  console.log(search1)
  return this.httpClient.post<{retombes:any}>(this.RETOMBEE_URL + '/api/getJournalisteByDate', search1);
}
}
