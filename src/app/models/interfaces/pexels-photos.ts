import {PexelsPhoto} from './pexels-photo';

export interface PexelsPhotos {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PexelsPhoto;
}
