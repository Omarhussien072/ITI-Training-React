import AboutStyles from './About.module.css';
import aboutImg from '../../assets/About.png'
import { useEffect, useState } from 'react';

export default function About() {
    let [message, setMessage] = useState(`We are Pety and we care about our companions because we are family,
                            We care and take care of wild cats & dogs and let them live with us
                            and we provide everything they need, and we prepare them for their future home .. family`);
    console.log('Render');

    // useEffect(() => {

    // },[]) // now its empty and will be invoked with every render //Bad Choice (Did mount).

    useEffect(() => {
        console.log(`Message changed!`); // Note that putting an intial value to useState = Rerender so this will be invoked in the intial render
    },[message]) // here it will only be invoked when the message changes (did update)

    const changeText = () => {
        setMessage(`We are Pety. A friendly AdoptionShop for cats and dogs. We care about our companions because they are part of our family.
                            We care and take care of wild cats & dogs by providing everything they need, We also prepare them for their future home .. family`)
    }
    return (
        <>
            <div className="vh-100">
                <div className={`${AboutStyles.imgContainer} position-relative`}>
                    <div className={`${AboutStyles.aboutInfo} position-absolute p-5`}>
                        <h2 className={`${AboutStyles.heading}`}>Who are we?</h2>
                        <p className={`${AboutStyles.info}`}>{`${message}`}</p>
                    </div>
                    <img className={`${AboutStyles.image}`} src={aboutImg} alt="PetShop" />
                </div>
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <button className='btn btn-primary text-center' onClick={changeText}>Change text</button>
                    </div>
            </div>
        </>
    );
}
