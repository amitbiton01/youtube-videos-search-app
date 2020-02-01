import axios from 'axios';

const KEY = "AIzaSyAe37jsEimpvOj8qgOsTAvQ8xjVnm-hZM0";

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
       part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
