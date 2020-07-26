import axios from 'axios';

const KEY = 'AIzaSyD7R1wy4sDSzFQWOV-EKJDWKy_4URjjYlk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }   
});

