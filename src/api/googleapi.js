import axios from 'axios';

const searchBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export const fetchVolumes = async(query) =>
{
    const link = `${searchBaseUrl}${query || '*'}${process.env.REACT_APP_API_KEY}`;
    const volumes = await axios.get(link);      
    return volumes.data.items;
}