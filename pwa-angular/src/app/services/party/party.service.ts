import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { env } from 'src/assets/env';
import { Party } from 'src/app/models/party';

@Injectable({
  providedIn: 'root'
})

export class PartyService {

  parties : Party[] = [];

  constructor(private http: HttpClient) { }

  getParties() {
    return this.http.get<Party[]>(`${env.api_url}/parties`);
  }
}
