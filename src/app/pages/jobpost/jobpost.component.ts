import { Component,OnInit } from '@angular/core';
import { NgForm,Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,take,tap } from 'rxjs';
import { JobcategoryService } from 'src/app/services/jobcategory.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css'],

})
export class JobpostComponent implements OnInit {
jobcategory$!:Observable<any[]>;


constructor(private jobcategoryservice: JobcategoryService, private jobservice:JobsService, private router:Router){}
ngOnInit(){
 this.jobcategory$= this.jobcategoryservice.getJobCategories();
//console.log(this.jobcategory$);

}
onFormSubmit(formResponse:NgForm){

  this.jobservice.saveJobPost(formResponse.form.value).pipe(
    take(1),
    tap(() => {
      this.router.navigateByUrl('/')
    })
  ).subscribe();
}

}
