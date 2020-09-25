import { env } from 'src/assets/env'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  voters_XLS_url() {
    return `${env.api_url}/voters`;
  }

  candidates_PDF_url() {
    return `${env.api_url}/candidates`;  
  }
}
