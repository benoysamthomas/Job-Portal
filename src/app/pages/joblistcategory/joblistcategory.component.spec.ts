import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistcategoryComponent } from './joblistcategory.component';

describe('JoblistcategoryComponent', () => {
  let component: JoblistcategoryComponent;
  let fixture: ComponentFixture<JoblistcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoblistcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoblistcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
