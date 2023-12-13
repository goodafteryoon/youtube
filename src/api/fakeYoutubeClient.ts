import axios from 'axios';

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }
  async vidoes() {
    return axios.get('/videos/popular.json');
  }
}
