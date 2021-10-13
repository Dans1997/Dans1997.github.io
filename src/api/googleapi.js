import axios from 'axios';

const searchBaseUrl = 'https://www.googleapis.com/books/v1/volumes';

export const fetchVolumes = async(query, startIndex ) =>
{
    if (query === undefined || query === '') return [];
    const link = `${searchBaseUrl}?q=${query}&startIndex=${startIndex || 0}${process.env.REACT_APP_API_KEY}`;
    const volumes = await axios.get(link);      
    return volumes.data.items;
}

export const fetchVolumeById = async(id) =>
{
    const link = `${searchBaseUrl}/${id || '*'}${process.env.REACT_APP_API_KEY}`;
    const volume = await axios.get(link);    
    return volume;
}