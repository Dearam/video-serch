import axios from 'axios';

const KEY = 'AIzaSyAwDmZakGzdDfgXhPtX5e6NIWyBqI6Y-lw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults : 5,
        key: KEY
    }
});

