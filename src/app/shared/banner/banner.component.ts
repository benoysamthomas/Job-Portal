import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobcategoryService } from 'src/app/services/jobcategory.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  jobcategory$!:Observable<any[]>;


  constructor(private jobcategoryservice: JobcategoryService){}
  ngOnInit(){
   this.jobcategory$= this.jobcategoryservice.getJobCategories();
  //console.log(this.jobcategory$);

  }
}
