import axios from 'axios';

const KEY = 'AIzaSyBBl3_QtZYPXzx-RqcESp7GXx7XgY1K1G0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})