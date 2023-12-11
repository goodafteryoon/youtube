import axios from 'axios';

export async function search(keyword: string) {
  return axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res) => res.data.items);
}
