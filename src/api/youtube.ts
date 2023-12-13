import { Item } from '../models/video/search';
import { ApiClient } from '../types/apiTypes';

export default class Youtube {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword?: string) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id: string) {
    return this.apiClient
      .channels({ params: { part: 'snippet' }, id })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async searchByChannelId(channelId: string) {
    return this.apiClient
      .playlist({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          channelId,
        },
      })
      .then((res) => res.data.items);
  }

  async #searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items: Item[]) =>
        items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
          regionCode: 'KR',
        },
      })
      .then((res) => res.data.items);
  }
}
