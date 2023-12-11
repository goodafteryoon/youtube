import axios, { AxiosInstance } from 'axios';
import { Item } from '../models/video/search';

export default class Youtube {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async search(keyword?: string) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: Item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.httpClient('videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
        regionCode: 'KR',
      },
    }).then((res) => res.data.items);
  }
}
