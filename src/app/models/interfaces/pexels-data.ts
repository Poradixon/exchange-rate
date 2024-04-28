import {PexelsPhotos} from './pexels-photos';

export interface PexelsData {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhotos[];
}
