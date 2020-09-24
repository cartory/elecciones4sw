import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Count } from '../../models/count'
import { Voter } from '../../models/voter';
@Injectable({
  providedIn: 'root'
})
export class VoterService {

  voters: Voter[] = [];
  count: number = 0;
  URL: string = "http://127.0.0.1:3000/api";

  constructor(private http: HttpClient) { }

  getVoters() {
    return this.http.get<number>(`${this.URL}/persons/count`);
  }

  getVoters_XLS() {
    return this.http.get(`${URL}/voters`);
  }
}
