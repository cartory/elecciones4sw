import { env } from 'src/assets/env'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  public default = "bolivia";

  voters_XLS_url() {
    return `${env.api_url}/voters`;
  }

  chart_to_excel_XLSX_url(location: string = this.default) {
    if (location.length == 0) {
      location = this.default;
    }
    return `${env.api_url}/votes/excel/${location}`;
  }
}
