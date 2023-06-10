import { Component, Input } from '@angular/core';
import { Observable, map,switchMap,of,tap } from 'rxjs';
import { JobcategoryService } from 'src/app/services/jobcategory.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobcategory$!:Observable<any[]>;
  jobs$!:Observable<any[]>;
  activeCategoryId: string  = 'All';

  constructor(private jobcategoryservice: JobcategoryService, private jobservice: JobsService){}
  ngOnInit(){
   this.jobcategory$= this.jobcategoryservice.getJobCategories();
   this.jobs$=this.jobservice.getJobsLIst('All');
  //console.log(this.jobcategory$);

  }

  loadJobList(categoryId: string): void {

    this.jobs$=this.jobservice.getJobsLIst(categoryId);

    this.activeCategoryId = categoryId;
  }

}
