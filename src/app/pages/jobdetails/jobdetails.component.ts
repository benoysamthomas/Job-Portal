import { Component } from '@angular/core';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { JobcategoryService } from 'src/app/services/jobcategory.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent {
  jobcategory$!:Observable<any[]>;
  jobs$!:Observable<any[]>;
  id!:any
  constructor(private route: ActivatedRoute,private jobcategoryservice: JobcategoryService, private jobservice: JobsService,private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    //console.log( this.id);
    this.jobs$=this.jobservice.getJobdetails(this.id);
    this.jobcategory$= this.jobcategoryservice.getJobCategories();
  }
  sanitizeImagePath(imagePath: string): SafeUrl {
    const basePath = 'assets/images';
    const sanitizedPath = `${basePath}/${imagePath}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedPath);
  }
}
