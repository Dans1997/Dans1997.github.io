import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { selectAllVolumes } from '../features/search/searchSlice';
import { fetchVolumeById } from '../api/googleapi';
import '../css/bookdetails.css';
import IconAndText from './IconAndText';

const BookDetails = () => {
    const history = useHistory();
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
              <button className='back' onClick={history.goBack}> <img src={require('../../public/back.png')}/> </button>
              <img className='corner-fingerprint' src={require('../../public/corner_fingerprint.png')}/>
              <img className='blue-circle' src={require('../../public/blue_circle.png')}/>
              <img className='red-dot' src={require('../../public/red_dot.png')}/>
              <img className='blue-dot' src={require('../../public/blue_dot.png')}/>
              <img className='round-fingerprint' src={require('../../public/round_fingerprint.png')}/>
            </div>
            <img className='volume-cover' src={require('../../public/volume_cover.png')}/>

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
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
                Why do some products capture widespread attention while others flop? <br /> <br />
            </div>

            <div className='bottom-app-bar'> 
              <IconAndText text='Read'/>
              <IconAndText text='Listen'/>
              <IconAndText text='Share'/>
            </div>
        </div>
    );
};

export default BookDetails;

/*{
    "kind": "books#volume",
    "id": string,
    "etag": string,
    "selfLink": string,
    "volumeInfo": {
      "title": string,
      "subtitle": string,
      "authors": [
        string
      ],
      "publisher": string,
      "publishedDate": string,
      "description": string,
      "industryIdentifiers": [
        {
          "type": string,
          "identifier": string
        }
      ],
      "pageCount": integer,
      "dimensions": {
        "height": string,
        "width": string,
        "thickness": string
      },
      "printType": string,
      "mainCategory": string,
      "categories": [
        string
      ],
      "averageRating": double,
      "ratingsCount": integer,
      "contentVersion": string,
      "imageLinks": {
        "smallThumbnail": string,
        "thumbnail": string,
        "small": string,
        "medium": string,
        "large": string,
        "extraLarge": string
      },
      "language": string,
      "previewLink": string,
      "infoLink": string,
      "canonicalVolumeLink": string
    },
    "userInfo": {
      "review": mylibrary.reviews Resource,
      "readingPosition": mylibrary.readingpositions Resource,
      "isPurchased": boolean,
      "isPreordered": boolean,
      "updated": datetime
    },
    "saleInfo": {
      "country": string,
      "saleability": string,
      "onSaleDate": datetime,
      "isEbook": boolean,
      "listPrice": {
        "amount": double,
        "currencyCode": string
      },
      "retailPrice": {
        "amount": double,
        "currencyCode": string
      },
      "buyLink": string
    },
    "accessInfo": {
      "country": string,
      "viewability": string,
      "embeddable": boolean,
      "publicDomain": boolean,
      "textToSpeechPermission": string,
      "epub": {
        "isAvailable": boolean,
        "downloadLink": string,
        "acsTokenLink": string
      },
      "pdf": {
        "isAvailable": boolean,
        "downloadLink": string,
        "acsTokenLink": string
      },
      "webReaderLink": string,
      "accessViewStatus": string,
      "downloadAccess": {
        "kind": "books#downloadAccessRestriction",
        "volumeId": string,
        "restricted": boolean,
        "deviceAllowed": boolean,
        "justAcquired": boolean,
        "maxDownloadDevices": integer,
        "downloadsAcquired": integer,
        "nonce": string,
        "source": string,
        "reasonCode": string,
        "message": string,
        "signature": string
      }
    },
    "searchInfo": {
      "textSnippet": string
    }
  }*/