import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job,Detailed } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private url = './jobs';
  private favoritesKey: string = 'favorites';
  constructor(private http: HttpClient) {}

 
  setfavoriteData(data: Job[]) {
    sessionStorage.setItem(this.favoritesKey, JSON.stringify(data));
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  getJobById(id: number): Observable<Detailed> {
    return this.http.get<Detailed>(`${this.url}/${id}`);
  }
}
