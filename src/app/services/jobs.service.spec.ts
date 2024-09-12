import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JobsService } from './jobs.service';

describe('JobsService', () => {
  let service: JobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JobsService);
  });

  

  it('should be created', () => {
    const service: JobsService = TestBed.get(JobsService);
    expect(service).toBeTruthy();
   });

   it('should have getAllJobs function', () => {
    const service: JobsService = TestBed.get(JobsService);
    expect(service.getAllJobs).toBeTruthy();
   });
   
   it('should have getJobById function', () => {
    const service: JobsService = TestBed.get(JobsService);
    expect(service.getJobById).toBeTruthy();
   });

});
