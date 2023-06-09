import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobcategoryService {
  //jobcategory:any;

  constructor(private http: HttpClient) { }

  getJobCategories(): Observable<any>{
    return this.http.get("https://jobportal-3b9d6-default-rtdb.firebaseio.com/jobcategory.json").pipe(
      map(responseObj =>{
        const resultarr=[];
        const objectresponse = responseObj as any[]
        for(let item in objectresponse){
             resultarr.push({...objectresponse[item],id:item})

        }
       // console.log(resultarr);
        return resultarr;
      }

      ));

  }

}
