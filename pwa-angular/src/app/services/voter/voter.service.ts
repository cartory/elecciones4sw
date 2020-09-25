import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { env } from 'src/assets/env'
import { Voter } from 'src/app/models/voter';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  voters: Voter[] = [];
  count: number = 0;

  constructor(private http: HttpClient) { }

  getVoters() {
    return this.http.get<number>(`${env.api_url}/persons/count`);
  }
}
