import axios, { AxiosInstance } from 'axios';

import {
  ChannelImageURLParams,
  SearchByChannelIdParams,
  SearchParams,
  VideoParams,
} from '../types/apiTypes';

export default class YoutubeClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async search(params: SearchParams) {
    return this.httpClient.get('search', params);
  }

  async videos(params: VideoParams) {
    return this.httpClient.get('videos', params);
  }

  async channels(params: ChannelImageURLParams) {
    return this.httpClient.get('channels', params);
  }

  async playlist(params: SearchByChannelIdParams) {
    return this.httpClient.get('playlists', params);
  }
}
