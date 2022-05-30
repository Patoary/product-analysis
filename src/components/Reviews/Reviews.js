import React from 'react';
import useMac from '../hooks/useMac';
import FullReview from '../FullReview/FullReview';
const Reviews = () => {
    const [ products, setProducts]  = useMac();

    return (
        <>
            <div className='grid md:grid-cols-3 gap-3 p-8'>
            {
                products && products.map(product =><FullReview
                key={product.id}
                product={product}
                ></FullReview>)
            }
            </div>
        </>
    );
};

export default Reviews;