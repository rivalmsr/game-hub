import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5881f4e5ed4c4c3eb845a632673f7c4e'
  }
})
