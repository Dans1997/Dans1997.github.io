import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/volumebanner.css'

const VolumeBanner = () => {
    const history = useHistory();

    function onClick(e)
    {
        e.preventDefault();
        history.push('/details/Opvmd1DrJ84C');
    }

    return (    
        <button className='volume-banner' onClick={onClick}>
            <img src={require('../images//volume-banner.png').default} alt=''/>
        </button>
    );  
};

export default VolumeBanner;