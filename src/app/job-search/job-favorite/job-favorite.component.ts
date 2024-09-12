import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job';

@Component({
  selector: 'job-favorite',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './job-favorite.component.html',
  styleUrl: './job-favorite.component.scss',
})
export class JobFavoriteComponent implements OnInit {
  favoriteJobs: Job[] = [];

  constructor() {}

  ngOnInit() {
    this.favoriteJobs = JobsService.favoriteData;
  }
}
