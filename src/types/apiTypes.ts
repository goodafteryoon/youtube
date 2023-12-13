import { Popular } from '../models/video/popular';
import { Search } from '../models/video/search';

export interface SearchParams {
  params: {
    part: 'snippet';
    maxResults: number;
    type: 'video';
    q: string;
  };
}

export interface VideoParams {
  params: {
    part: 'snippet';
    maxResults: number;
    chart: 'mostPopular';
    regionCode: 'KR' | 'EN' | 'FR';
  };
}

export interface ApiClient {
  search(params: SearchParams): Promise<Search>;
  videos(params: VideoParams): Promise<Popular>;
}
