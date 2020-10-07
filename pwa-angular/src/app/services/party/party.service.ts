import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { env } from 'src/assets/env';
import { Party } from 'src/app/models/party';
import { PartyVote } from 'src/app/models/party_vote';

@Injectable({
  providedIn: 'root'
})

export class PartyService {

  parties: Party[] = [];
  parties_votes: PartyVote[] = [];

  constructor(private http: HttpClient) { }

  getParties() {
    return this.http.get<Party[]>(`${env.api_url}/parties`);
  }

  get_parties_votes(location: string = "bolivia") {
    return this.http.get<PartyVote[]>(`${env.api_url}/parties/votes/get/${location}`);
  }
}
