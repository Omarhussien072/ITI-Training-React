import error404 from '../../assets/404.png';
import fancyguy from '../../assets/fancyguy.png';
import NotFoundStyles from './NotFound.module.css';

export default function NotFound() {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
                <img src={error404} alt="cat" className={`fancy-guy position-absolute ${NotFoundStyles.error404}`} />
                <h1 className={`position-absolute ${NotFoundStyles.heading}`}>Not Found</h1>
                <div className="img-container d-flex position-relative">
                    <img src={fancyguy} alt="fancy guy holding 404 not found" className={`${NotFoundStyles.fancyguy}`} />
                </div>

            </div>
        </>
    );
}
