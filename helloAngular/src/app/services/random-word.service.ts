import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const SERVICE_URL = 'http://www.setgetgo.com/randomword/get.php';

@Injectable()
export class RandomWordService {

  constructor(private http: Http) { }

  getNew(): Observable<string> {
  return this.http.get(SERVICE_URL)
    .map((response: Response) => response.text());
  }

}
