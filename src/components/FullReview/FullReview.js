import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const FullReview = (props) => {
    const{name,detail,picture} = props.product;
    return (
       
        <div>
            <div className='bg-gray-300 rounded-lg p-5'>

<div className='flex justify-center mt-3 '>
<img className='img' src={picture} alt="" />
<h3 className='ml-5 mt-8'>{name}</h3>
</div>

<div className='icon '>
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>

</div>

<p>{detail}</p>

</div>
        </div>
    );
};

export default FullReview;