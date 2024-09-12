import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job,Detailed } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private url = './jobs';
  private static _favoriteData: Job[];

  constructor(private http: HttpClient) {}

  public static get favoriteData(): Job[] {
    return JobsService._favoriteData;
  }

  public static set favoriteData(data: Job[]) {
    JobsService._favoriteData = data;
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  getJobById(id: number): Observable<Detailed> {
    return this.http.get<Detailed>(`${this.url}/${id}`);
  }
}
