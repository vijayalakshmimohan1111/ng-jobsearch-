import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { Detailed } from '../../models/job';

@Component({
  selector: 'job-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './job-view.component.html',
  styleUrl: './job-view.component.scss',
})
export class JobViewComponent implements OnInit {
  jobData?: Detailed;

  constructor(
    private service: JobsService,
    private _location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.getJobById(parseInt(jobId));
    }
  }

  getJobById(jobId: number) {
    this.service.getJobById(jobId).subscribe({
      next: (data: Detailed) => {
        this.jobData = data;
      },
      error: (error) => {
        console.log('something went wrong while fething data', error);
      },
    });
  }

  goback() {
    this._location.back();
  }
}
