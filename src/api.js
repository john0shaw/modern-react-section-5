import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID I5UkzUodaKPHmE0U7op76_X7bfuD2H5o2tC-1P5tOXA'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;