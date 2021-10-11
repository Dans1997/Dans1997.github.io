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
    const volume = GetVolume();
    const volumeInfo = volume.volumeInfo;
    const authors = volume.volumeInfo && volume.volumeInfo.authors;

    function GetVolume()
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
              <img className='corner-fingerprint' src={require('../images/corner_fingerprint.png').default} alt=''/>
              <img className='blue-circle' src={require('../images/blue_circle.png').default} alt=''/>
              <img className='red-dot' src={require('../images/red_dot.png').default} alt=''/>
              <img className='blue-dot' src={require('../images/blue_dot.png').default} alt=''/>
              <img className='round-fingerprint' src={require('../images/round_fingerprint.png').default} alt=''/>
            </div>
            <img className='volume-cover' src={require('../images/volume_cover.png').default} alt=''/>

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
              <IconAndText text='Read' src={require('../images/book-open.png').default}/>
              <IconAndText text='Listen' src={require('../images/headphones.png').default}/>
              <IconAndText text='Share' src={require('../images/share.png').default}/>
            </div>
        </div>
    );
};