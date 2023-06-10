import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }
  getJobsLIst(categoryId:string): Observable<any>{


    return this.http.get("https://jobportal-3b9d6-default-rtdb.firebaseio.com/jobs.json").pipe(
      map(responseObj =>{
        const resultarr=[];
        const objectresponse = responseObj as any[]
        if(categoryId!="All"){
          for(let item in objectresponse){
            if(objectresponse[item].CategoryId===categoryId){

             // console.log("item filtered");
              resultarr.push({...objectresponse[item],id:item})
            }
          }
        } else{
          for(let item in objectresponse){

              //console.log("item non filtered");
              resultarr.push({...objectresponse[item],id:item})

          }
        }

        //console.log(resultarr);
        return resultarr;
      }

      ));

  }
  getJobdetails(jobid:string): Observable<any>{
    return this.http.get("https://jobportal-3b9d6-default-rtdb.firebaseio.com/jobs.json").pipe(
      map(responseObj =>{
        const resultarr=[];
        const objectresponse = responseObj as any[]
          for(let item in objectresponse){
            if(item===jobid){
              resultarr.push({...objectresponse[item],id:item})
            }
          }
        return resultarr;
      }

      ));

  }
}
