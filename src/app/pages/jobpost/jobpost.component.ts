import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobcategoryService } from 'src/app/services/jobcategory.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css'],

})
export class JobpostComponent implements OnInit {
jobcategory$!:Observable<any[]>;


constructor(private jobcategoryservice: JobcategoryService){}
ngOnInit(){
 this.jobcategory$= this.jobcategoryservice.getJobCategories();
//console.log(this.jobcategory$);

}


}
