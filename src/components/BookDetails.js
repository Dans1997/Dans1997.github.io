import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllVolumes } from '../features/search/searchSlice';
import { fetchVolumeById } from '../api/googleapi';
import IconAndText from './IconAndText';
import BackButton from './BackButton';
import '../css/bookdetails.css';

const header = (
	<div className='header-container'>
		<div className='header'>
			<BackButton />
			<img className='corner-fingerprint' src={require('../images/corner_fingerprint.png').default} alt=''/>
			<img className='blue-circle' src={require('../images/blue_circle.png').default} alt=''/>
			<img className='red-dot' src={require('../images/red_dot.png').default} alt=''/>
			<img className='blue-dot' src={require('../images/blue_dot.png').default} alt=''/>
			<img className='round-fingerprint' src={require('../images/round_fingerprint.png').default} alt=''/>
		</div>
		<img className='volume-cover' src={require('../images/volume_cover.png').default} alt=''/>
	</div>
)

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

	if (!volumeInfo) return header;
	else return (
      <>
		{header}
        <div className='volume-info container'>
			<div className='volume-title'>
				{volumeInfo && 
					<span> 
						{volumeInfo.title || '?'} 
						{volumeInfo.subtitle && <span className='subtitle-text'>{`: ${volumeInfo.subtitle}`} </span>}
					</span> 
				}
			</div>

			{authors && <div className='author-text'> { authors.map((author) => `${author} `) }</div>}
			{volume.description && <div className='description'> {volume.description} </div>}
        </div>

		<div className='bottom-app-bar'> 
			<IconAndText text='Read' src={require('../images/book-open.png').default}/>
			<IconAndText text='Listen' src={require('../images/headphones.png').default}/>
			<IconAndText text='Share' src={require('../images/share.png').default}/>
		</div>
      </>
    );
};