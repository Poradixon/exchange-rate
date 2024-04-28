import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {PexelsData} from '../models/interfaces/pexels-data';
import {PexelsPhotos} from '../models/interfaces/pexels-photos';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {

  constructor(private http: HttpClient) { }

  getImageUrl(city: string): Observable<string>
  {
    return this.http.get<PexelsData>(`${environment.pexelsUrl}search?query=${city}&per_page=1`, {
      headers: {Authorization: environment.pexelsKey},
    }).pipe(
      map( (data: PexelsData) => (data.photos.shift() as PexelsPhotos)?.src.large),
    );
  }
}
