import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllVolumes } from '../features/search/searchSlice';
import { fetchVolumeById } from '../api/googleapi';
import IconAndText from './IconAndText';
import BackButton from './BackButton';
import '../css/bookdetails.css';

export default () => {
    let { volumeId } = useParams();
    const volume = getVolume();
    const volumeInfo = volume.volumeInfo;
    const authors = volume.volumeInfo && volume.volumeInfo.authors;

    function getVolume()
    {
        let volumes = useSelector(selectAllVolumes);
        let result = null;
        if (volumes && volumes.length > 0)
        {
            result = volumes.find(v => v.id === volumeId);
            if (result) return result;
        }
        result = fetchVolumeById(volumeId);
        return result;
    }

    return (
        <div>
            <div className='header'>
              <BackButton />
              <img className='corner-fingerprint' src={require('../../public/corner_fingerprint.png')} alt=''/>
              <img className='blue-circle' src={require('../../public/blue_circle.png')} alt=''/>
              <img className='red-dot' src={require('../../public/red_dot.png')} alt=''/>
              <img className='blue-dot' src={require('../../public/blue_dot.png')} alt=''/>
              <img className='round-fingerprint' src={require('../../public/round_fingerprint.png')} alt=''/>
            </div>
            <img className='volume-cover' src={require('../../public/volume_cover.png')} alt=''/>

            <div className='volume-title'>
              <span className='title-text'>Hooked: </span> 
              <span className='subtitle-text'>How to Build Habit Forming Products</span>
              {/*volumeInfo && volumeInfo.title &&*/ }
            </div>

            {volumeInfo && <div> {volumeInfo.title} {volumeInfo.subtitle && `: ${volumeInfo.subtitle}`} </div>}

            <div className='author-text'> Nir Eyal </div>
            {authors && authors.map((author) => `${author} `)}

            <div className='description'> 
                How do successful companies create products people can’t put down? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
            </div>

            <div className='bottom-app-bar'> 
              <IconAndText text='Read' src={require('../../public/book-open.png')}/>
              <IconAndText text='Listen' src={require('../../public/headphones.png')}/>
              <IconAndText text='Share' src={require('../../public/share.png')}/>
            </div>
        </div>
    );
};