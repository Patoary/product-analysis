import Image from '../../Assets/Image/mac2.jpg';
import './Home.css';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import useMac from '../hooks/useMac';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [products,setProducts] =useMac();
    const navigate = useNavigate();
    return (
        <>
            <div className='main-container mb-32'>
                <div className='text '>
                    <h4>Your next Mac</h4>
                    <h4>Will be your best Mac for ever </h4>
                    <p>The most powerful MacBook Pro ever is here.
                        With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.
                        Add to that a stunning Liquid Retina XDR display,
                        the best camera and audio ever in a Mac notebook, and all the ports you need.
                        The first notebook of its kind, this MacBook Pro is a beast.
                    </p>
                    <button className='btn'>Buy Now</button>
                </div>
                <div className="image">
                    <img src={Image} alt="" />
                </div>
            </div>
            <p className='my-2 text-5xl  flex justify-center'>Customer Reviews</p>
            <div className='grid md:grid-cols-3 gap-3 p-8'>
            {
                products && products.map(product => <CustomerInfo
                key={product.id}
                product={product}
                ></CustomerInfo>)
            }
               
            </div>
            <button onClick={() => navigate('/reviews')} className='btn flex m-auto'>See All Reviews</button>
        </>

    );
};

export default Home;