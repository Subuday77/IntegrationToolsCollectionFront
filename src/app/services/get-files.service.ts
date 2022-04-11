import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFilesService {

  constructor(private httpGetFile: HttpClient) { }

  getFile(id: number): Observable<any> {
    return this.httpGetFile.get('https://integration-tools-collection.herokuapp.com/getfile?id=' + id);
  }
}
