import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 USER_URL: string = "http://localhost:3000";
  
  constructor(private httpClient :HttpClient) { }
  
  public signUp(User: any , img:File){
    console.log("user from service");
    let formData =new FormData();
   formData.append('Nom',User.Nom);
   formData.append('Prenom',User.Prenom);
   formData.append('email',User.email);
   formData.append('password',User.password);
   formData.append('img',img);
   console.log(formData)
    return this.httpClient.post<{message:string}>(`${this.USER_URL + '/api/addUser'}`, formData)
 } 

 public signUpAdmin(User: any , img:File){
  console.log("user from service");
  let formData =new FormData();
 formData.append('Nom',User.Nom);
 formData.append('Prenom',User.Prenom);
 formData.append('email',User.email);
 formData.append('password',User.password);
 formData.append('img',img);
 console.log(formData)
  return this.httpClient.post<{message:string}>(`${this.USER_URL + '/api/addAdmin'}`, formData)
} 
 public getUser(){ 

  return this.httpClient.get<{users:any}>(this.USER_URL + '/api/allUsers');
 
}
public getUsers(id:any ){
 
  return this.httpClient.get<{user:any}>(`${this.USER_URL + '/api/allusers'}/${id}`); 
}

public deleteUser(id:any){
  return this.httpClient.delete<{message:string}>(`${this.USER_URL + '/api/deleteUser'}/${id}`)
}
public login(user: any){
  console.log("user from service");
  return this.httpClient.post<{findedUser:any}>(`${this.USER_URL + '/api/login'}`, user)
}
public updateUser(user:any){
  return this.httpClient.put<{message:string}>(`${this.USER_URL + '/api/editUser'}/${user._id}`,user)
}

public updateProfile(User: any , img:File){
  console.log("user from service");
  let formData =new FormData();
  formData.append('_id',User._id);
 formData.append('Nom',User.Nom);
 formData.append('Prenom',User.Prenom);
 formData.append('email',User.email);
 formData.append('password',User.password);
 formData.append('img',img);
 console.log(formData)
  return this.httpClient.put<{message:string}>(`${this.USER_URL + '/api/updateProfile'}/${User._id}`, formData)
} 
public getUserInvalide(){ 
  return this.httpClient.post<{users:any}>(this.USER_URL + '/api/getUserInvalide',"invalideUser");
}
public getUserValider(){ 
  return this.httpClient.post<{users:any}>(this.USER_URL + '/api/getUserValider',"valider");
}
public getAdmins(){ 
  return this.httpClient.post<{users:any}>(this.USER_URL + '/api/getAdmins',"Admin");
}
public updatePwd(user:any,password: any){
  console.log("pass",password);
  let update={"user":user,"password":password};
  console.log("service",update);
  
  console.log("user from service");
  return this.httpClient.post<{message:any}>(`${this.USER_URL + '/api/updatePwd'}`, update)
}
}
